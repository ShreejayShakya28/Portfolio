### Carousel Code
```
        <div class="carousel-container">
            <div class="carousel-wrapper">
                <div class="carousel-track" id="carouselTrack">
                    <div class="carousel-slide">
                        <img src="/images/G/G1.png" alt="Project Image 1" />
                    </div>
                    <div class="carousel-slide">
                        <img src="/images/G/G2.png" alt="Project Image 2" />
                    </div>
                    <div class="carousel-slide">
                        <img src="/images/G/G3.png" alt="Project Image 3" />
                    </div>
                    <div class="carousel-slide">
                        <img src="/images/G/G4.png" alt="Project Image 4" />
                    </div>
                    <div class="carousel-slide">
                        <img src="/images/G/G5.png" alt="Project Image 5" />
                    </div>
                </div>
                
                <button class="carousel-button prev" id="prevBtn">‹</button>
                <button class="carousel-button next" id="nextBtn">›</button>
                
                <div class="image-counter">
                    <span id="currentImage">1</span> / <span id="totalImages">5</span>
                </div>
            </div>
            
            <div class="carousel-indicators" id="indicators">
                <div class="indicator active" data-slide="0"></div>
                <div class="indicator" data-slide="1"></div>
                <div class="indicator" data-slide="2"></div>
                <div class="indicator" data-slide="3"></div>
                <div class="indicator" data-slide="4"></div>
            </div>
        </div>
    </div>

    <script>
        class Carousel {
            constructor() {
                this.currentSlide = 0;
                this.totalSlides = 5;
                this.track = document.getElementById('carouselTrack');
                this.prevBtn = document.getElementById('prevBtn');
                this.nextBtn = document.getElementById('nextBtn');
                this.indicators = document.querySelectorAll('.indicator');
                this.currentImageSpan = document.getElementById('currentImage');
                this.totalImagesSpan = document.getElementById('totalImages');
                
                this.init();
            }
            
            init() {
                this.prevBtn.addEventListener('click', () => this.prevSlide());
                this.nextBtn.addEventListener('click', () => this.nextSlide());
                
                this.indicators.forEach((indicator, index) => {
                    indicator.addEventListener('click', () => this.goToSlide(index));
                });
                
                // Add keyboard navigation
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'ArrowLeft') this.prevSlide();
                    if (e.key === 'ArrowRight') this.nextSlide();
                });
                
                this.updateDisplay();
            }
            
            nextSlide() {
                this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
                this.updateDisplay();
            }
            
            prevSlide() {
                this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
                this.updateDisplay();
            }
            
            goToSlide(slideIndex) {
                this.currentSlide = slideIndex;
                this.updateDisplay();
            }
            
            updateDisplay() {
                // Move the track
                const translateX = -this.currentSlide * 100;
                this.track.style.transform = `translateX(${translateX}%)`;
                
                // Update indicators
                this.indicators.forEach((indicator, index) => {
                    indicator.classList.toggle('active', index === this.currentSlide);
                });
                
                // Update counter
                this.currentImageSpan.textContent = this.currentSlide + 1;
            }
        }
        
        // Initialize carousel when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            new Carousel();
        });
    </script>
```

Carousel Styles
```
        /* Carousel Styles */
        .carousel-container {
            position: relative;
            max-width: 100%;
            margin: 2rem auto;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        
        .carousel-wrapper {
            position: relative;
            width: 100%;
            height: 500px;
            overflow: hidden;
        }
        
        .carousel-track {
            display: flex;
            width: 100%;
            height: 100%;
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .carousel-slide {
            flex: 0 0 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f7fafc;
        }
        
        .carousel-slide img {
            max-width: 95%;
            max-height: 95%;
            object-fit: contain;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .carousel-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(255, 255, 255, 0.9);
            border: none;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            color: #2b6cb0;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
            z-index: 10;
        }
        
        .carousel-button:hover {
            background: rgba(255, 255, 255, 1);
            transform: translateY(-50%) scale(1.1);
        }
        
        .carousel-button.prev {
            left: 15px;
        }
        
        .carousel-button.next {
            right: 15px;
        }
        
        .carousel-indicators {
            display: flex;
            justify-content: center;
            gap: 8px;
            padding: 20px;
            background: #ffffff;
        }
        
        .indicator {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #cbd5e0;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .indicator.active {
            background: #2b6cb0;
            transform: scale(1.2);
        }
        
        .image-counter {
            position: absolute;
            top: 15px;
            right: 15px;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 0.9rem;
            z-index: 10;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .carousel-wrapper {
                height: 300px;
            }
            
            .carousel-button {
                width: 40px;
                height: 40px;
                font-size: 14px;
            }
            
            .carousel-button.prev {
                left: 10px;
            }
            
            .carousel-button.next {
                right: 10px;
            }
        }
```