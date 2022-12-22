import React from 'react';

function Card() {
  return (

    <div className='n'>
      <div>
        <div className="card-match-3">
        <p class="card-date">2022년 12월 13일 (화)</p>
           <div className="i">
               <div class="first-L">
                    <img 
                     class="card-img"
                      src="img/citc-nissan-powerchairs.webp"
                      width={150} height={150}/> 
               </div> 
    
               <p class="card-news">에티하드 경기장에서 파워체어 축구를 시도하는 팬들</p>
           </div>
        </div>

        <div className="card-match-3">
           <div className="i">
               <div class="first-L">
                    <img 
                     class="card-img"
                      src="img/ballers-press-release-image.webp"
                      width={150} height={150}/> 
               </div> 
    
               <p class="card-news">밸러스 샴페인이 맨체스터 시티의 공식 샴페인 지역 파트너가 되다.</p>
           </div>
        </div>
        <div className="card-match-1">
           <div className="i">
               <div class="first-L">
                    <img 
                     class="card-img"
                      src="img/pl-live-philly.webp"
                      width={150} height={150}/> 
               </div> 
    
               <p class="card-news">프리미어 리그 라이브를 위해 필라델피아로 향하는 시티 팬들</p>
           </div>
        </div>

      </div>

      <div>
      <div className="card-match-2">
      <p class="card-date">2022년 12월 12일 (월)</p>
           <div className="i">
               <div class="first-L">
                    <img 
                     class="card-img"
                      src="img/jamie-carr-m2_06201.webp"
                      width={150} height={150}/> 
               </div> 
    
               <p class="card-news">제이미 카가 단독 대서양 열 도전에 나서다.</p>
           </div>
        </div>

        <div className="card-match-3">
           <div className="i">
               <div class="first-L">
                    <img 
                     class="card-img"
                      src="img/monday-marker-17-oct.webp"
                      width={150} height={150}/> 
               </div> 
    
               <p class="card-news">먼데이 마커: 앞으로 한 주 동안 도시를 안내합니다.</p>
           </div>
        </div>

        <div className="card-match-1">
           <div className="i">
               <div class="first-L">
                    <img 
                     class="card-img"
                      src="img/tf_13049.webp"
                      width={150} height={150}/> 
               </div> 
    
               <p class="card-news">에티하드 경기장 오락지 개발을 위한 타당성 조사가 진행 중이다.</p>
           </div>
        </div>

      </div>

      <div>
      <div className="card-match-2">
      <p class="card-date">2022년 12월 10일 (토)</p>
           <div className="i">
               <div class="first-L">
                    <img 
                     class="card-img"
                      src="img/addis-ababa-web.webp"
                      width={150} height={150}/> 
               </div> 
    
               <p class="card-news">아디스 아바바 OSC를 위한 두 배의 기쁨</p>
           </div>
        </div>
      </div>

      <div class="a">
      <div className="card-match-2">
      <p class="card-date">2022년 12월 09일 (금)</p>
           <div className="i">
               <div class="first-L">
                    <img 
                     class="card-img"
                      src="img/citc-luke-robinson.webp"
                      width={150} height={150}/> 
               </div> 
    
               <p class="card-news">아카데미 코치가 CITC를 위해 이틀 안에 마라톤을 두 번 완주합니다!</p>
           </div>
        </div>
      </div>
      <a href="" 
         class="button-1" > 더보기 </a>
    </div>
  );
}

export default Card;