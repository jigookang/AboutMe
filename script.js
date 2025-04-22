// 웹사이트 기능 관리를 위한 IIFE
(function() {
    'use strict';
    
    // DOM 요소 캐싱
    const DOM = {
        navLinks: document.querySelectorAll('.nav a'),
        sections: document.querySelectorAll('section, footer'),
        portfolio: {
            items: document.querySelectorAll('.portfolio-item')
        },
        experience: {
            items: document.querySelectorAll('.experience-item')
        }
    };
    
    // 네비게이션 및 스크롤 기능
    const navigation = {
        init: function() {
            this.bindSmoothScroll();
            this.bindScrollSpy();
        },
        
        // 부드러운 스크롤 기능 바인딩
        bindSmoothScroll: function() {
            DOM.navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        window.scrollTo({
                            top: targetSection.offsetTop - 80, // 헤더 높이를 고려한 오프셋
                            behavior: 'smooth'
                        });
                    }
                });
            });
        },
        
        // 스크롤 위치에 따른 활성 링크 표시
        bindScrollSpy: function() {
            window.addEventListener('scroll', function() {
                const scrollPosition = window.scrollY;
                
                DOM.sections.forEach(section => {
                    const sectionTop = section.offsetTop - 100;
                    const sectionHeight = section.offsetHeight;
                    const sectionId = section.getAttribute('id');
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        DOM.navLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${sectionId}`) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            });
        }
    };
    
    // 문서 로드 완료 시 실행되는 초기화 함수
    function init() {
        console.log('웹사이트가 로드되었습니다!');
        navigation.init();
    }
    
    // 문서 로드 완료 시 초기화 함수 실행
    document.addEventListener('DOMContentLoaded', init);
})(); 