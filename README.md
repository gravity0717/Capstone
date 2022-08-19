# Capstone

1. 문제 정의
  - 사용자의 만족이 높은 패션 코디네이션 서비스를 구축하고자 한다.

2. 코디네이션 서비스를 어떻게 구축할까? 
  - 사용자가 코디하고 싶은 아이템 여러벌을 웹서비스에 업로드 하면, 
    좋은 코디네이션 순으로 패션을 추천해주는 서비스를 구축하고자 한다.
    
  - "좋은" 코디네이션은 어떻게 판별할까?
  - **패션에 대한 호응도**가, 패션을 정량화 할 수 있는 가장 적합한 지표라고 판단하였다.
  - 그러기에 호응도를 판별할 수 있는 지표를 설정하고, 그 지표를 inference 
    하는 모델을 구축하는 것을 목표로 삼았다. 
    
3. 데이터셋
  -  Idea: 무신사 홈페이지의 코디맵 데이터를 이용 
  -  코디맵 홈페이지 : https://www.musinsa.com/app/codimap/lists
  -  코디맵이란? 전문 스타일리스트가 제안하는, 무신사 스토어 상품으로 구성된 코디셋 
  -  조회수를 , 호응도를 판별할 수 있는 groundTruth 로 잡고, 코디맵을 구성하는 아이템을 
     인풋 아이템으로 정의하였다. 
     
     
 4. 노트북 구성 

4-1. dataWrangling_MUSINSA_VIEW.ipynb
4-2. analysis_MUSINSA_dataset.ipynb
4-3. data_to_dataFrame_MU.ipynb
4-4. MuitiCNN_MU_dataset.ipynb
