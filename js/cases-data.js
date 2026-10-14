const CASES = [
  {
    "category": "money",
    "tags": [
      "money",
      "contract"
    ],
    "title": "채권압류 및 추심명령 즉시항고 승소",
    "desc": "의뢰인은 제3채무자인데, 채무자의 채권자가 채무자의 제3채무자에 갖는 채권을 압류 및 추심명령을 신청하여 결정을 받았습니다.",
    "image": "assets/images/cases/preview-42.jpg",
    "url": "case-debt-seizure.html"
  },
  {
    "category": "money",
    "tags": [
      "money",
      "contract"
    ],
    "title": "임금 및 퇴직금 청구 승소",
    "desc": "의뢰인은 상대방 회사를 퇴직하였는데, 상대방 회사는 3개월이 지나도록 미지급 임금 및 퇴직금을 지급하지 않아, 의뢰인은 상대방 회사를 상대로 임금 및 퇴직금 청구를 의뢰하였습니다.",
    "image": "assets/images/cases/preview-02.jpg",
    "url": "case-002.html"
  },
  {
    "category": "money",
    "tags": [
      "money"
    ],
    "title": "가압류 이의신청 승소",
    "desc": "의뢰인은 상대방과 민사소송(본소 및 반소)을 진행하고 있었는데, 상대방은 3억 6,000만원을 피보전권리로 주장하면서, 의뢰인의 공탁금 출급 채권에 대하여 가압류를 하였습니다.",
    "image": "assets/images/cases/preview-07.jpg",
    "url": "case-007.html"
  },
  {
    "category": "arrest",
    "tags": [
      "arrest"
    ],
    "title": "아동학대 고소 사건 기소",
    "desc": "의뢰인은 생후 4개월 아이를 두고 있는 아빠였는데, 상대방이 소속되어 있는 신생아 건강관리 서비스 계약을 체결한 후, 상대방(소위 이모님)이 의뢰인의 집에 상주하면서 아이를 돌보는 용역을 제공하는 과정에서, 상대방이 아이의 목을 잡지 않고 일으켜 목이 뒤쳐지는 등의 신체적, 정서적…",
    "image": "assets/images/cases/preview-09.jpg",
    "url": "case-009.html"
  },
  {
    "category": "contract",
    "tags": [
      "contract"
    ],
    "title": "공사대금 청구소송 승소",
    "desc": "의뢰인은 도장 등을 주된 영업으로 하는 공사업체를 운영하였는데, 원도급업체와 세금계산서를 대신 발급해준 건물주를 상대로 공사대금 청구를 의뢰하였습니다.",
    "image": "assets/images/cases/preview-15.jpg",
    "url": "case-016.html"
  },
  {
    "category": "money",
    "tags": [
      "money",
      "arrest"
    ],
    "title": "보복운전 손해배상 청구 승소",
    "desc": "의뢰인은 상대방으로부터 보복운전을 당하여, 고소를 하였고, 상대방은 의뢰인과 합의를 하지 않은 채 기소가 되어 벌금 700만원을 선고받았습니다. 의뢰인은 상대방을 상대로 손해배상을 청구하는 소를 제기하였습니다.",
    "image": "assets/images/cases/preview-21.jpg",
    "url": "case-022.html"
  },
  {
    "category": "admin",
    "tags": [
      "admin"
    ],
    "title": "정보공개청구 소송 승소",
    "desc": "의뢰인은 사형제도에 대한 연구를 하는 과정에서, 사형수에 대한 정보를 확인하기 위하여 국가기록원에 정보공개를 청구하였는데, 국가기록원은 유족의 사생활을 이유로 정보공개청구를 거부하였습니다. 이에 의뢰인은 위 정보공개거부처분을 취소하는 소송을 의뢰하였습니다.",
    "image": "assets/images/cases/preview-23.jpg",
    "url": "case-024.html"
  },
  {
    "category": "arrest",
    "tags": [
      "arrest"
    ],
    "title": "무고 피고소 사건 불기소처분",
    "desc": "의뢰인들은 교회의 장로 및 구성원들인데, 상대방의 무단 계약 등의 비위가 밝혀져 교회 내부절차 및 결의를 거친 후 횡령 및 배임등으로 고소를 하였습니다. 그런데 고소사건에서 상대방은 무혐의 처분을 받았습니다.",
    "image": "assets/images/cases/preview-29.jpg",
    "url": "case-030.html"
  },
  {
    "category": "realestate",
    "tags": [
      "realestate",
      "money"
    ],
    "title": "가계약금 반환 청구 소송 승소",
    "desc": "의뢰인은 이사할 집을 알아보는 과정에서, 마음에 드는 집이 있어서 중개인을 통하여 가계약금 600만원을 지급하였습니다.",
    "image": "assets/images/cases/preview-31.jpg",
    "url": "case-032.html"
  },
  {
    "category": "family",
    "tags": [
      "family",
      "money"
    ],
    "title": "예금 지급 청구의 소 승소",
    "desc": "의뢰인은 다른 형제들과 공동상속인인데, 상속재산분할합의도 완료한 상황이었습니다. 의뢰인은 상속재산 중 예금에 대하여 은행에 피상속인 명의로 된 예금 수억원 중 의뢰인의 상속지분에 따른 예금 지급을 청구하였음에도 불구하고, 은행은 내부 규정상 다른 상속인들과 같이 청구하지 않는 이상…",
    "image": "assets/images/cases/preview-38.jpg",
    "url": "case-039.html"
  },
  {
    "category": "money",
    "tags": [
      "money",
      "contract"
    ],
    "title": "약정금 청구 소송 승소",
    "desc": "의뢰인은 분행대행사 직원으로 활동하면서 신축 상가 분양 중개 활동을 활발히 하였습니다.",
    "image": "assets/images/cases/preview-10.jpg",
    "url": "case-010.html"
  },
  {
    "category": "family",
    "tags": [
      "family"
    ],
    "title": "유류분반환청구 소송 승소",
    "desc": "의뢰인은, 가정불화로 집을 나와 살다가 외국에 거주하게 되었는데, 부친과 오랫동안 연락을 하지 못하고 있다가, 친척을 통하여 부친의 사망소식을 알게 되었습니다.",
    "image": "assets/images/cases/preview-12.jpg",
    "url": "case-012.html"
  },
  {
    "category": "arrest",
    "tags": [
      "arrest",
      "family"
    ],
    "title": "폭행죄 항소심 감형",
    "desc": "의뢰인은 배우자인 A의 가정 경제 파탄 행위를 파악하고, 이혼소송을 진행하게 되었는데, 그 과정에서 A는 수년전에 의뢰인으로부터 폭행을 당하였다는 취지로 고소를 하였고, 의뢰인은 제1심에서 유죄판결을 선고받고, 항소를 하였습니다.",
    "image": "assets/images/cases/preview-13.jpg",
    "url": "case-014.html"
  },
  {
    "category": "defamation",
    "tags": [
      "defamation",
      "money",
      "arrest"
    ],
    "title": "부당고소 및 명예훼손에 따른 손해배상 청구 소송 방어 승소",
    "desc": "의뢰인은 어느 종교단체의 임원이고, 상대방 A는 위 종교단체 소속 신도로서, 종교단체 소속 직원으로 근무하다가 횡령, 배임, 사문서 위조 등의 혐의가 인정되어, 적법한 인사위원회 등의 절차를 거쳐 해고되었습니다.",
    "image": "assets/images/cases/preview-24.jpg",
    "url": "case-025.html"
  },
  {
    "category": "contract",
    "tags": [
      "contract",
      "money",
      "arrest"
    ],
    "title": "사기를 이유로 회사 대표이사를 상대로 한 손해배상 청구 소송 전부 승소",
    "desc": "의뢰인은 수입육류를 공급받아 소매업체에 판매하는 도매업체인데, 수입육류를 공급하는 업체가 선입금을 지급하고 양질의 수입육을 조금 더 낮은 금액으로 공급해 주겠다는 취지로 기망을 하였고, 이에 속은 의뢰인은 약 3억원 정도를 지급하였으나, 위 수입육류 업체는 약속한 육류를 공급하지…",
    "image": "assets/images/cases/preview-33.jpg",
    "url": "case-034.html"
  },
  {
    "category": "contract",
    "tags": [
      "contract",
      "money"
    ],
    "title": "계약 위반에 따른 손해배상청구 소송 방어 승소",
    "desc": "의뢰인은 근로관계 관련 교육프로그램을 제작 공급하는 업체인데, A는 의뢰인으로부터 교육프로그램을 공급받아 사용하면서, 관련 공공기관이 요구한 지침을 준수하지 않았다는 취지로 부당이득금 반환조치를 받았습니다.",
    "image": "assets/images/cases/preview-44.jpg",
    "url": "case-045.html"
  },
  {
    "category": "money",
    "tags": [
      "money"
    ],
    "title": "의료과실에 따른 손해배상 청구 승소 판결",
    "desc": "의뢰인은 자신의 자녀가 경찰관의 조치에 따른 응급입원으로 A정신병원(재단법인 운영)에 입원했는데, 입원한 지 한달 만에 샤워실에서 자살을 하여, 위 A정신병원에 대한 손해배상 청구를 의뢰하였습니다.",
    "image": "assets/images/cases/preview-01.jpg",
    "url": "case-001.html"
  },
  {
    "category": "arrest",
    "tags": [
      "arrest",
      "admin"
    ],
    "title": "관세법 위반 추징 선고유예 판결",
    "desc": "의뢰인 A는 제1심에서 다른 공동피고인의 경우와 마찬가지로 고의가 없었다는 주장, 관세법 위반에 해당한다는 위법성과 관련된 인식이 없었다는 주장 등을 하였으나, 이로 인하여 200여억원이 넘는 추징금을 선고받았습니다.",
    "image": "assets/images/cases/preview-37.jpg",
    "url": "case-038.html"
  },
  {
    "category": "arrest",
    "tags": [
      "arrest"
    ],
    "title": "특정범죄가중처벌등에관한법률위반(도주치상)(일명 뺑소니) 무혐의",
    "desc": "의뢰인은 업무를 마치고 야간에 영동고속도로에서 90킬로로 정속주행을 하는 도중에 잠시 몽롱해진 상태에서 무언가 쿵 소리를 들었으나, 분기점에서 차량을 빠져나가야 하는 상황이어서 아무 일이 없다고 생각하고 차량을 운행한 후, 집에 도착하였습니다.",
    "image": "assets/images/cases/preview-32.jpg",
    "url": "case-033.html"
  },
  {
    "category": "money",
    "tags": [
      "money",
      "arrest"
    ],
    "title": "사기 피해자의 손해배상 청구 인용",
    "desc": "이 사건의 쟁점은, 가해자에 대한 확정된 형사 판결문이 있기 때문에, 손해배상 청구권은 인정될 여지가 높은 사안이었으나, 당시 합의서를 작성하고, 실제 변제 내역이 제출되었기 때문에, 이 부분에 대하여 구체적인 경위에 대하여 주장을 하면서, 실제 변제가 이루졌는지 여부입니다.",
    "image": "assets/images/cases/preview-26.jpg",
    "url": "case-027.html"
  },
  {
    "category": "contract",
    "tags": [
      "contract",
      "money"
    ],
    "title": "동업계약 탈퇴에 따른 출입금지가처분 신청 인용",
    "desc": "의뢰인 A는 상대방 B와 헬스장을 동업하여 운영하기로 하여 5년째 운영하고 있었으나, 헬스장 운영과 관련하여 다툼이 발생하였고, 급기야 B는 A를 폭행하는 사건이 발생하였습니다.",
    "image": "assets/images/cases/preview-03.jpg",
    "url": "case-003.html"
  },
  {
    "category": "contract",
    "tags": [
      "contract",
      "money"
    ],
    "title": "시행사업 관련 주식 양도담보 약정에 따른 반환청구 승소",
    "desc": "의뢰인 A는 리조트 사업(이하 '이 사건 리조트 사업'이라고 합니다) 관련 시행사이며, 상대방 B는 리조트 사업 관련 시공업체의 사내이사입니다.",
    "image": "assets/images/cases/preview-22.jpg",
    "url": "case-023.html"
  },
  {
    "category": "realestate",
    "tags": [
      "realestate",
      "contract"
    ],
    "title": "재건축 관련 매도청구권 방어 승소",
    "desc": "의뢰인 A는 연립주택 중 1호실의 소유자로서, 연립주택의 재건축에 반대하는 입장이었는데, 위 연립주택의 구분소유자들이 재건축결의를 한 후, 건설업체인 상대방 B를 매수위임자로 선정하였습니다.",
    "image": "assets/images/cases/preview-40.jpg",
    "url": "case-041.html"
  },
  {
    "category": "contract",
    "tags": [
      "contract",
      "money"
    ],
    "title": "무권대리인 책임 방어 승소",
    "desc": "의뢰인 A는 C회사 소속 직원이었는데, 상대방 B와 2018년산 물품공급계약에 관여를 하였습니다.",
    "image": "assets/images/cases/preview-16.jpg",
    "url": "case-017.html"
  },
  {
    "category": "arrest",
    "tags": [
      "arrest",
      "money"
    ],
    "title": "사기 고소사건 인용(기소)",
    "desc": "의뢰인 A는 육류를 대규모로 수입하는 B로부터 수입육을 공급받아 다시 소매업체에 매도하는 업체를 운영하였는데, B가 선입금을 지급하면 수입육을 시세보다 저렴하게 공급하겠다고 하여 이를 믿고 선입금 수억원을 지급하였는데, B가 선입금과 관련된 수입육을 공급하지 않아 사기로 고소하였습니다.",
    "image": "assets/images/cases/preview-41.jpg",
    "url": "case-042.html"
  },
  {
    "category": "realestate",
    "tags": [
      "realestate",
      "money",
      "contract"
    ],
    "title": "전차인에 대한 인도청구 및 부당이득반환청구 승소",
    "desc": "A는 재단법인으로서 상가건물을 소유하고 있었는데, B라는 업체에 이 상가건물을 임대하고, B는 C라는 업체에 지하주차장을 전대하였습니다.",
    "image": "assets/images/cases/preview-45.jpg",
    "url": "case-046.html"
  },
  {
    "category": "family",
    "tags": [
      "family"
    ],
    "title": "상속포기 신고 수리결정",
    "desc": "A는 B의 상속인으로서, B의 사망에 따라 상속포기를 신청하였습니다. B는 채무가 자산보다 많은 것으로 확인되어 상속포기 신청을 하였습니다.",
    "image": "assets/images/cases/preview-04.jpg",
    "url": "case-004.html"
  },
  {
    "category": "money",
    "tags": [
      "money",
      "contract"
    ],
    "title": "어플 오류에 따른 손해배상 청구 승소",
    "desc": "A는 한국도로공사가 제공하는 고속도로 교통정보 어플리케이션(이하 ‘이 사건 어플’이라고 합니다)을 자신의 스마트폰에 설치하여 사용하였는데, 2018. 10.",
    "image": "assets/images/cases/preview-39.jpg",
    "url": "case-040.html"
  },
  {
    "category": "contract",
    "tags": [
      "contract",
      "money"
    ],
    "title": "공사대금 청구소송 승소",
    "desc": "A는 조적, 미장 공사를 하는 업체이고, B는 숙박시설 공사를 진행한 도급인입니다. A는 공사를 완료하였으나 공사대금 중 일부를 지급받지 못하였다고 주장하면서 소를 제기하였고, 제1심에서 승소를 하였습니다.",
    "image": "assets/images/cases/preview-06.jpg",
    "url": "case-006.html"
  },
  {
    "category": "money",
    "tags": [
      "money",
      "contract"
    ],
    "title": "약정금 청구 소송 승소",
    "desc": "A는 마트를 개업하면서 포스기를 설치하려고 인터넷을 알아보던 중, 중소업체인 B와 포스기 임대계약을 체결하였는데, 이 계약 당시에 B는 A에게 포스기 사용료 상당의 보조금을 지급하겠다고 약정하였으나, 보조금을 지급하지 않자, A가 항의를 하였고, 이를 무마하기 위해서 B는 A에게…",
    "image": "assets/images/cases/preview-36.jpg",
    "url": "case-037.html"
  },
  {
    "category": "arrest",
    "tags": [
      "arrest"
    ],
    "title": "보험사기 무죄",
    "desc": "피고인(의뢰인)은 정형외과에 어깨, 허리 등에 관하여 교정치료를 받으러 갔다가, 병원에서 비만관리 시술, 피부관리 시술을 서비스로 해주겠다고 하여 위 시술을 받았는데, 검사는 위 비만관리 시술비용, 피부관리 시술비용을 보험회사에 허위로 청구하였다는 범죄사실로 공소를 제기하였습니다. 2.",
    "image": "assets/images/cases/preview-30.jpg",
    "url": "case-031.html"
  },
  {
    "category": "contract",
    "tags": [
      "contract",
      "money"
    ],
    "title": "공사대금 청구 소송 승소",
    "desc": "A는 인테리어를 주된 영업으로 하는 개인사업자이고, B는 조적, 방수, 미장 등을 주된 영업으로 하는 법인이며, C는 종합건설업자입니다. C는 호텔을 건축하면서 A에게 인테리어 공사를 하도급주었고, B에게 조적, 방수, 미장 공사를 하도급 주었습니다.",
    "image": "assets/images/cases/preview-05.jpg",
    "url": "case-005.html"
  },
  {
    "category": "realestate",
    "tags": [
      "realestate",
      "money"
    ],
    "title": "건물 하자로 인한 손해배상 청구 소송 승소",
    "desc": "A는 B건물의 1층에 있는 호실을 임차하여 인쇄소를 운영하였는데, 위 호실의 천장에서 배수관이 터지는 사고가 발생하여 A의 인쇄기와 비품이 물에 젖는 피해를 입었습니다.",
    "image": "assets/images/cases/preview-43.jpg",
    "url": "case-044.html"
  },
  {
    "category": "arrest",
    "tags": [
      "arrest"
    ],
    "title": "컴퓨터 등 사용사기죄 무죄",
    "desc": "A(의뢰인)은 같이 일을 하였던 동료 B로부터 자신의 2G 휴대전화를 무단으로 이용하여 소액결제를 하여, 인터넷 쇼핑몰에서 물품을 구입하여 자신에게 그 물품 상당의 손해를 입혔다고 주장하면서, 컴퓨터 등 사용사기죄로 고소하였고, 1심에서 유죄판결이 선고되었는데, A는 항소를 하여 항소심이…",
    "image": "assets/images/cases/preview-20.jpg",
    "url": "case-021.html"
  },
  {
    "category": "arrest",
    "tags": [
      "arrest"
    ],
    "title": "위증죄 무죄 판결",
    "desc": "A(의뢰인)은 제3자의 매매계약에 관한 민사소송에서, 증인으로 출석하여 매매계약 책임과 관련된 질문에 관하여 허위진술을 하였다는 취지로 기소를 당하였으나, 제1심에서는 A가 증언한 내용이, 그 증인신문 당시 질문의 전 취지를 볼 때 증언이 허위라는 인식이 없었다는 이유로 무죄를…",
    "image": "assets/images/cases/preview-17.jpg",
    "url": "case-018.html"
  },
  {
    "category": "arrest",
    "tags": [
      "arrest"
    ],
    "title": "재물손괴죄 무죄 판결",
    "desc": "A(의뢰인)는 주차장 건물에 임대를 하여 방을 만들어 사용, 수익하고 있었는데, 위 주차장 건물을 경매로 취득한 B가 인도집행명령을 하자, A가 자신 소유의 동산 등을 보호하기 위하여, 자신이 설치한 간이문, 창틀을 떼어 놓아 재물손괴로 기소되어 재판을 받았습니다.",
    "image": "assets/images/cases/preview-11.jpg",
    "url": "case-011.html"
  },
  {
    "category": "realestate",
    "tags": [
      "realestate",
      "contract",
      "money"
    ],
    "title": "부동산인도가처분 승소",
    "desc": "A(의뢰인)은 숙박시설을 신축하였는데, 공사수급인인 B건설회사가 공사대금을 A로부터 공사대금을 지급받지 못하였고 주장하면서, 유치권을 행사하고 점유하였습니다.",
    "image": "assets/images/cases/preview-25.jpg",
    "url": "case-026.html"
  },
  {
    "category": "family",
    "tags": [
      "family"
    ],
    "title": "이혼소송 승소",
    "desc": "A(의뢰인)은 남편인 B로부터 폭행, 욕설을 수시로 당하여 이를 원인으로 이혼을 청구하고, 자녀의 양육권, 친권을 청구하고, 재산분할청구, 위자료 청구를 하였습니다. B는 반소로서 혼인파탄의 원인이 A에게 있다고 주장하면서 위자료 청구, 자녀의 양육권, 친권을 주장하였습니다.",
    "image": "assets/images/cases/preview-08.jpg",
    "url": "case-008.html"
  },
  {
    "category": "arrest",
    "tags": [
      "arrest"
    ],
    "title": "변호사법 위반 사건 집행유예 판결",
    "desc": "A(의뢰인)은 회생, 파산 사건을 광고하면서, 변호사, 법무사의 명의를 빌려 회생, 파산 업무를 처리하여 변호사법 위반으로 기소되었습니다.",
    "image": "assets/images/cases/preview-18.jpg",
    "url": "case-019.html"
  },
  {
    "category": "money",
    "tags": [
      "money",
      "contract"
    ],
    "title": "약정금 청구 소송 승소",
    "desc": "A(의뢰인)는 B의 부탁을 받고, 허위로 4,000만원 상당의 차용증을 작성하여 주었는데, B는 갑자기 위 차용증을 근거로 A에게 4,000만원 대여금 청구를 하였습니다.",
    "image": "assets/images/cases/preview-19.jpg",
    "url": "case-020.html"
  },
  {
    "category": "contract",
    "tags": [
      "contract",
      "money"
    ],
    "title": "공사도급계약 해제에 따른 손해배상 청구 승소",
    "desc": "A(의뢰인)는 B와 공사대금 7억 1,000만원, 공사기간 7개월로 정하여 건물을 신축하는 공사도급계약을 체결하였는데, B는 공사선급금으로 2억 1,000만원을 지급받았음에도 불구하고, 공사를 임의로 중단하고 더 이상 공사를 진행하지 않았으며, 이미 공사를 완료한 부분도 설계도면과…",
    "image": "assets/images/cases/preview-27.jpg",
    "url": "case-028.html"
  },
  {
    "category": "money",
    "tags": [
      "money",
      "contract",
      "arrest"
    ],
    "title": "대표이사의 업무상 배임행위에 대한 손해배상 청구 소송 승소",
    "desc": "A(의뢰인)은 출판사로서, 전 대표이사인 B가 재임기간 동안 자신의 다른 사업체에 부당으로 이익을 제공하고, 다른 사업체의 직원에게 부당하게 금전을 지급하는 등의 업무상 배임행위를 하여 A에게 손해를 입혔으므로 그 손해배상을 청구하라는 소송을 제기하였습니다.",
    "image": "assets/images/cases/preview-28.jpg",
    "url": "case-029.html"
  },
  {
    "category": "arrest",
    "tags": [
      "arrest"
    ],
    "title": "마약 범죄 일부 무죄 및 집행유예 판결",
    "desc": "A(의뢰인)는 공범인 B로부터 마약을 수수하고, 투약하였는데, B는 마약을 A에게 교부한 사실이 없다고 주장하였고, A는 수사단계에서는 B로부터 마약을 수수한 사실이 없다고 주장하여다가 법정에서는 마약을 수수하였다는 취지로 진술을 번복하였습니다.",
    "image": "assets/images/cases/preview-34.jpg",
    "url": "case-035.html"
  },
  {
    "category": "contract",
    "tags": [
      "contract",
      "money"
    ],
    "title": "투자 및 동업계약에 따른 손해배상 청구 소송 승소",
    "desc": "A(의뢰인)와 B는 C와 동업계약을 체결하고, A와 B가 경매절차에서 발생하는 근저당권부 채권을 유동화전문회사로부터 매수하기로 하고, C에게 위 근저당권부채권 매수인의 지위를 이전하는 약정을 체결하였습니다.",
    "image": "assets/images/cases/preview-35.jpg",
    "url": "case-036.html"
  },
  {
    "category": "arrest",
    "tags": [
      "arrest"
    ],
    "title": "제3자 뇌물취득죄 무죄 판결",
    "desc": "A(외뢰인)는 세무법인 소속의 세무사로서 병원을 운영하는 B가 세무조사를 받자, B로부터 세무조사 대응업무 위임계약을 체결하고, 그 위임사무의 대가로 1,500만원을 지급받았다. A는 담당 세무서 소속의 공무원이자 자신의 후배인 C에게 300만원을 후배들의 회식비로 지급하였다.",
    "image": "assets/images/cases/preview-14.jpg",
    "url": "case-015.html"
  }
];
