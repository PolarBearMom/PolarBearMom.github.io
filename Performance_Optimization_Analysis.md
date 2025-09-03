# ProjectU 성능 최적화 구현 분석

## 개요
ProjectU 프로젝트에서 실제로 구현한 성능 최적화 기법들을 분석한 결과입니다. MVVM 패턴을 기반으로 한 체계적인 아키텍처와 함께 다양한 최적화 기법들을 적용하여 게임 성능을 향상시켰습니다.

---

## 🔍 1. 필터링 시스템 최적화

### BitMask 기반 고속 필터링 시스템

**구현 파일:**
- `VM_BaseFilterSetting.h/.cpp` - 기본 필터 설정
- `VM_ItemFilterSetting.h/.cpp` - 아이템 필터 설정
- `CommonFilterType.h` - 필터 타입 정의

### 핵심 최적화 기법

#### 1. **Enum + BitMask 최적화**

```cpp
// CommonFilterType.h
UENUM()
enum class EItemFilterFlag : int32
{
    // 등록 조건 (0 ~ 15 Bit)
    RegisterStartBit = 0,
    Grade_Normal    = 1 << 0,   // 일반 등급
    Grade_Goodly    = 1 << 1,   // 고급 등급
    Grade_Rare      = 1 << 2,   // 희귀 등급
    Grade_Hero      = 1 << 3,   // 영웅 등급
    Grade_Legend    = 1 << 4,   // 전설 등급
    Grade_Myth      = 1 << 5,   // 신화 등급
    
    // 제외 조건 (17 ~ 30 Bit)
    ExcludeStartBit                 = 1 << 16,
    Exclude_CollectionRegisterable  = 1 << 17,  // 컬렉션 등록 가능 아이템 제외
    Exclude_Reinforced             = 1 << 18,   // 강화된 아이템 제외
    ExcludeEndBit                  = 1 << 31
};
ENUM_CLASS_FLAGS(EItemFilterFlag)
```

#### 2. **비트 연산 기반 빠른 필터링**

```cpp
// VM_BaseFilterSetting.cpp
void UVM_BaseFilterSetting::OnChangedCheck(FFilterOptionInfo ChangedInfo)
{
    if (ChangedInfo.IsChecked)
    {
        CheckedFilterBitMask |= ChangedInfo.FilterKey;  // 체크되었으면 추가
    }
    else
    {
        CheckedFilterBitMask &= ~ChangedInfo.FilterKey; // 체크 해제되었으면 제거
    }
    
    if (OnChangedFilterCheck.IsBound())
    {
        OnChangedFilterCheck.Broadcast(CheckedFilterBitMask);
    }
}
```

#### 3. **템플릿 기반 Enum 순회 최적화**

```cpp
// VM_ItemFilterSetting.cpp
void UVM_ItemFilterSetting::ApplyFilterSetting(int32 InVisibleBitMask, int32 InCheckedBitMask)
{
    Super::ApplyFilterSetting(InVisibleBitMask, InCheckedBitMask);
    
    EItemFilterFlag ItemVisibleFilterBitMask = (EItemFilterFlag)InVisibleBitMask;
    EItemFilterFlag ItemChackedFilterBitMask = (EItemFilterFlag)InCheckedBitMask;
    
    // 템플릿 기반 효율적인 Enum 순회
    UCommonUtility::ForEachEnum<EItemFilterFlag>([&](EItemFilterFlag Flag)
    {
        if (EnumHasAnyFlags(ItemVisibleFilterBitMask, Flag))
        {
            bool bIsChecked = EnumHasAnyFlags(ItemChackedFilterBitMask, Flag);
            bool bIsRegisterFilter = int32(Flag) < int32(EItemFilterFlag::ExcludeStartBit);
            CreateEntryOption(FFilterOptionInfo(int32(Flag), bIsChecked, bIsRegisterFilter), 
                            GetItemFilterOptionText(Flag));
        }
    }, false);
    
    Refresh_FilterList();
}
```

### 성능 최적화 효과
- **비트 연산**: O(1) 시간 복잡도로 필터 조합
- **메모리 효율성**: 32bit 정수로 모든 필터 상태 관리
- **캐시 친화적**: 연속된 메모리 액세스 패턴

---

## 🔧 2. 인벤토리 인터페이스 최적화

### Interface 기반 확장 가능한 슬롯 시스템

**구현 파일:**
- `Bag_InteractionHelper.h` - 인터페이스 정의
- `UW_CommonSlot.h/.cpp` - 공용 슬롯 시스템
- `InvenBagViewModel.cpp` - 인벤토리 뷰모델

### 핵심 최적화 기법

#### 1. **Interface 기반 다형성 활용**

```cpp
// Bag_InteractionHelper.h
UINTERFACE(MinimalAPI)
class UBag_InteractionHelper : public UInterface
{
    GENERATED_BODY()
};

class PROJECTU_API IBag_InteractionHelper
{
    GENERATED_BODY()
    
public:
    virtual EBagSelectModeType GetBagSelectModeType() { return EBagSelectModeType::None; }
    virtual TSet<uint16> GetSelectedItemList() { return TSet<uint16>(); }
    
    // 아이템 선택시 호출 - 각 컨텐츠에서 구현
    virtual bool NotifyBagItemClicked(const class UTagItemData* Item) = 0;
    
    // 아이템 활성화 여부 판단 - 각 컨텐츠에서 구현
    virtual bool CheckActiveAbleItem(const class UTagItemData* Item) = 0;
    
    // 비활성화 표현 방식 판단
    virtual EBagInActiveType GetInactiveType() { return EBagInActiveType::SlotLock; }
    
    // 델리게이트 반환 함수들 - Observer 패턴 구현
    virtual FOnInitInvenSlot* GetOnInitSelectItemDelegate() { return nullptr; }
    virtual FOnChangedCheckSelect* GetOnCheckSelectItemDelegate() { return nullptr; }
    virtual FOnChangedCheckSelect* GetOnUnCheckSelectItemDelegate() { return nullptr; }
    virtual FOnUnSelect* GetOnUnSelectItemDelegate() { return nullptr; }
    virtual FOnApplyFilter* GetOnOnApplyFilter() { return nullptr; }
};
```

#### 2. **Observer 패턴을 통한 느슨한 결합**

```cpp
// InvenBagViewModel.cpp
void UInvenBagViewModel::PostInitProperties()
{
    Super::PostInitProperties();
    
    if (UInventoryModel* Inventory = UCommonUtility::GetInventoryModel())
    {
        // 델리게이트 바인딩을 통한 Observer 패턴 구현
        Inventory->OnUp_SetInventory.AddUObject(this, &UInvenBagViewModel::SetBagInventory);
        Inventory->OnUp_ChangedInvenSize.AddUObject(this, &UInvenBagViewModel::Changed_InvenSize);
        Inventory->OnUp_AddedTagItemData.AddUObject(this, &UInvenBagViewModel::Changed_AddTagItemData);
        Inventory->OnUp_DeleteItem.AddUObject(this, &UInvenBagViewModel::Changed_DeleteItem);
        Inventory->Up_RegisterBagInteraction.AddUObject(this, &UInvenBagViewModel::Bag_InteractionChangeState);
        Inventory->Up_InitBagInteraction.AddUObject(this, &UInvenBagViewModel::Bag_InitInteraction);
        Inventory->OnUp_BagInteractionCheckSelectChange.AddUObject(this, &UInvenBagViewModel::Bag_InteractionCheckSelect);
        Inventory->Up_ApplyFilterBagInteraction.AddUObject(this, &UInvenBagViewModel::Bag_Interaction_ApplyFilter);
        Inventory->Up_ChangedSelectItem.AddUObject(this, &UInvenBagViewModel::UpdateChangedSelect);
    }
}
```

#### 3. **Command 패턴을 통한 액션 통합 처리**

```cpp
// Bag_InteractionHelper.h - 델리게이트 정의
DECLARE_MULTICAST_DELEGATE_OneParam(FOnRemoveInvenSlot, uint16 InvenSlot);
DECLARE_MULTICAST_DELEGATE_TwoParams(FOnRegisterInvenSlot, uint16 InvenSlot, bool ReleaseSelect);
DECLARE_MULTICAST_DELEGATE_OneParam(FOnChangedCheckSelect, uint16 InvenSlot);
DECLARE_MULTICAST_DELEGATE(FOnUnSelect);
DECLARE_MULTICAST_DELEGATE(FOnInitInvenSlot);
DECLARE_MULTICAST_DELEGATE_ThreeParams(FOnApplyFilter, int32 VisibleBitMask, int32 ActiveBitMask, int32 MaxAvailableCapacity);

// InvenBagViewModel.cpp - 상태 변경 처리
void UInvenBagViewModel::Bag_InteractionCheckSelect(bool RegisterCheckSelect, uint16 InvenSLot)
{
    if (RegisterCheckSelect)
    {
        SelectedItemList.Add(InvenSLot);
    }
    else
    {
        SelectedItemList.Remove(InvenSLot);
    }
    RefresInvenSlot(InvenSLot);
}
```

### 성능 최적화 효과
- **코드 재사용성**: 하나의 인터페이스로 다양한 컨텐츠 지원
- **메모리 효율성**: 불필요한 중복 코드 제거
- **유지보수성**: 느슨한 결합으로 변경 영향 최소화

---

## 🎨 3. 애셋 아이콘 속성 관리 최적화

### 효율적인 아이콘 데이터 구조 및 캐싱 시스템

**구현 파일:**
- `AssetIconAttributes.h/.cpp` - 아이콘 속성 관리
- `UW_CommonSlot.h/.cpp` - 슬롯 UI 컴포넌트

### 핵심 최적화 기법

#### 1. **구조화된 속성 데이터 관리**

```cpp
// AssetIconAttributes.h
UENUM(BlueprintType)
enum class EAttributeWidgetType : uint8
{
    None, Icon, Grade, NumericActionText, RatioText, CoolTime, CoolTimeText,
    Collectionbook, CheckMark, Equip, Auto, Lock, New, InActiveGray,
    Destruction, SlotLock, SelectCheck, Select, FusionGrade, Empty,
    Reinforce, ReinforceText, LevelText, ToolTip, ActionNameOverlay,
    ActionNameText, SkillLearnedText, ConfidantHeart, CustomShap,
    LimitLevelText, LimitedTimeImg, RankGradeImg, Combo, BackGround,
    CompairPower, ServerCoolTime, ServerCoolTimeText, Max
};

USTRUCT(BlueprintType)
struct FAssetIconAttributes
{
    GENERATED_USTRUCT_BODY()
    
private:
    UPROPERTY()
    EAssetIconNumberScope AssetIconNumberScope = EAssetIconNumberScope::None;
    
    UPROPERTY()
    int64 AssetIconNumber = 0;
    
    // TMap을 활용한 효율적인 속성 관리
    UPROPERTY()
    TMap<EAttributeWidgetType, FAssetIconAttributeDetails> AttributeDetailsList;
    
public:
    FORCEINLINE void AddAssetIconAttributeDetails(EAttributeWidgetType InAttributeWidgetType, 
                                                EAttributeWidgetAction InAttributeWidgetAction, 
                                                int64 InValue, int64 InSubValue = 0)
    {
        AttributeDetailsList.Emplace(InAttributeWidgetType, 
                                   FAssetIconAttributeDetails(InAttributeWidgetType, InAttributeWidgetAction, InValue, InSubValue));
    }
};
```

#### 2. **효율적인 데이터 생성 및 캐싱**

```cpp
// AssetIconAttributes.cpp
void FAssetIconAttributes::GenerateAttributesByInventorySlotNo(uint16 InInventorySlotNo)
{
    if (UInventoryModel* InvenModel = UCommonUtility::GetInventoryModel())
    {
        uint16 InventorySlotNo = (InInventorySlotNo == EQUIP_SLOT_EMPTY_VALUE) ? 
                                (uint16)AssetIconNumber : InInventorySlotNo;
                                
        if (const UTagItemData* ItemData = InvenModel->GetInventoryItemData(InventorySlotNo))
        {
            if (const TLD_ItemInfo* ItemInfo = ItemData->GetItemInfo())
            {
                // 기본 아이템 정보 생성
                GenerateAttributesByItemNo(ItemData->ItemId);
                
                // 상태별 속성 추가 (한 번에 배치로 처리)
                AddAssetIconAttributeDetails(EAttributeWidgetType::Equip, 
                                           EAttributeWidgetAction::Visiblility, ItemData->IsEquipState());
                AddAssetIconAttributeDetails(EAttributeWidgetType::CoolTime, 
                                           EAttributeWidgetAction::CountDownTimespan, 
                                           InvenModel->CurrentGroupUseItemCoolTimeValue(InventorySlotNo) * 1000);
                AddAssetIconAttributeDetails(EAttributeWidgetType::ServerCoolTime, 
                                           EAttributeWidgetAction::SerVerCoolTime, ItemData->CoolTime);
                AddAssetIconAttributeDetails(EAttributeWidgetType::Lock, 
                                           EAttributeWidgetAction::Visiblility, ItemData->IsLock);
                
                // 조건부 속성 처리
                if (UItemHelper::CheckIsEnableStackItem(UStringConvertUtility::ToName(ItemData->ItemId)))
                    AddAssetIconAttributeDetails(EAttributeWidgetType::NumericActionText, 
                                               EAttributeWidgetAction::CountConvertText, ItemData->Count);
                else
                    AddAssetIconAttributeDetails(EAttributeWidgetType::NumericActionText, 
                                               EAttributeWidgetAction::UpgradeConvertText, ItemData->Upgrade);
            }
        }
    }
}
```

#### 3. **UI 컴포넌트 효율적 업데이트**

```cpp
// UW_CommonSlot.cpp
void UUW_CommonSlot::SetCommonSlotData(FAssetIconAttributes AssetIconAttributes)
{
    if (AssetIconAttributes.GetAssetIconNumberScope() == EAssetIconNumberScope::None)
    {
        initializeSlot();
        return;
    }
    
    InitData();
    int64 PreSlotNo = SlotNo;
    SlotNo = AssetIconAttributes.GetAssetIconNumber();
    SlotNoType = AssetIconAttributes.GetAssetIconNumberScope();
    
    // 동일 ID가 아닌 경우에만 전체 리프레시
    if (SlotNo != PreSlotNo)
    {
        for (TPair<EAttributeWidgetType, UWidget*> FindUseSlotCompType : UseSlotCompTypeToWidget)
        {
            EAttributeWidgetType SlotComponentType = FindUseSlotCompType.Key;
            if (AssetIconAttributes.GetAttributeDetailsList().Contains(SlotComponentType))
            {
                RefreshSlotUIComponent(AssetIconAttributes.GetAttributeDetailsList().FindRef(SlotComponentType));
            }
            else
            {
                RefreshSlotUIComponent(FAssetIconAttributeDetails(SlotComponentType, EAttributeWidgetAction::Visiblility, false));
            }
        }
    }
    else
    {
        // 변경된 속성만 업데이트 (Delta Update)
        for (const TPair<EAttributeWidgetType, FAssetIconAttributeDetails>& AttributeDetails : 
             AssetIconAttributes.GetAttributeDetailsList())
        {
            RefreshSlotUIComponent(AttributeDetails.Value);
        }
    }
    
    IsInitState = false;
}
```

### 성능 최적화 효과
- **메모리 효율성**: TMap을 활용한 필요한 속성만 저장
- **렌더링 최적화**: 변경된 부분만 선택적 업데이트 (Delta Update)
- **캐시 활용**: 동일 데이터 재사용으로 중복 처리 방지
- **배치 처리**: 여러 속성을 한 번에 처리하여 호출 횟수 최소화

---

## 📊 종합 성능 최적화 효과

### 1. **메모리 사용량 최적화**
- BitMask를 활용한 필터 상태 압축
- TMap 기반 필요한 데이터만 저장
- Interface를 통한 중복 코드 제거

### 2. **연산 속도 최적화**
- 비트 연산을 통한 O(1) 필터링
- Delta Update를 통한 선택적 UI 갱신
- Observer 패턴을 통한 이벤트 기반 처리

### 3. **유지보수성 향상**
- Interface 기반 확장 가능한 구조
- 델리게이트를 통한 느슨한 결합
- 구조화된 데이터 관리

### 4. **확장성 확보**
- 새로운 필터 타입 쉽게 추가 가능
- 다양한 컨텐츠에서 공용 슬롯 재사용
- 아이콘 속성 동적 확장 지원

---

## 🚀 결론

ProjectU에서 구현한 성능 최적화 기법들은 단순한 최적화를 넘어서 확장 가능하고 유지보수가 용이한 시스템 아키텍처를 구축하는 데 중점을 두었습니다. 

특히 **BitMask 기반 필터링**, **Interface 기반 다형성**, **효율적인 데이터 구조 설계** 등의 기법을 통해 성능과 코드 품질을 동시에 향상시킬 수 있었습니다.

이러한 최적화 기법들은 대규모 MMORPG 개발에서 요구되는 고성능과 확장성을 만족시키는 실용적인 해결책을 제시합니다.
