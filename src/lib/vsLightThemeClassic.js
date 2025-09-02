/** Visual Studio Light+ 느낌(담백/얇게) */
const vsLightThemeClassic = {
  plain: { color: "#1f2328", backgroundColor: "#ffffff" },
  styles: [
    // 주석: 연녹, 굵기 없음
    { types: ["comment", "prolog", "doctype", "cdata"], style: { color: "#008000", fontWeight: "normal" }},

    // 키워드: 파랑(굵게 X)  ex) class, public, protected, virtual, override, void, const, int32
    { types: ["keyword", "atrule", "tag", "storage", "storage-type"], style: { color: "#0000FF", fontWeight: "normal" }},

    // 문자열: 자주
    { types: ["string", "char"], style: { color: "#A31515" }},

    // 숫자/불리언: 녹색
    { types: ["number", "boolean"], style: { color: "#098658" }},

    // 함수/메서드: 갈색  ex) AddItem, RemoveItem, OnItemAdded
    { types: ["function", "method", "function-definition"], style: { color: "#795E26", fontWeight: "normal" }},

    // 클래스명: 노란색 (굵기 X)  ex) UPartyModel, UMVVMViewModelBase
    { types: ["class-name"],
      style: { color: "#D7BA7D", fontWeight: "normal" } },
    
    // 자료형/제네릭/타입: 진한 노란색 (굵게)  ex) TMap<uint8, FPartyData>, FOnPartyChanged, uint8, EPartyState
    { types: ["type", "builtin", "constant", "symbol", "namespace", "property", "generic", "template", "maybe-class-name", "entity", "other", "support", "support.type"],
      style: { color: "#D7BA7D", fontWeight: "600" } },

    // 매크로/전처리기: 진한 파랑  ex) UFUNCTION, UPROPERTY, GENERATED_BODY
    { types: ["macro", "preprocessor"], style: { color: "#0000CC", fontWeight: "normal" }},

    // 구두점/연산자: 기본색 유지
    { types: ["punctuation", "operator"], style: { color: "#1f2328" } },
  ],
};

export default vsLightThemeClassic;
