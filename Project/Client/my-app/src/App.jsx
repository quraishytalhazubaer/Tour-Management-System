import React from 'react'; // Import React
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering


// Navbar Component
const Navbar = ({ handleSignInClick }) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src="https://placehold.co/30x30/007BFF/FFFFFF?text=✈️" alt="Logo" className="d-inline-block align-text-top me-2" />
                Wanderlust Journeys
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Flights</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Hotels</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Tours</a></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            BDT
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">USD</a></li>
                            <li><a className="dropdown-item" href="#">EUR</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <button onClick={handleSignInClick} className="btn btn-primary rounded-pill px-4 ms-lg-3">Sign In</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

// Hero Section Component
const HeroSection = () => (
    <section className="hero-section">
        <div className="hero-content">
            <h1 className="display-4 fw-bold mb-4">Explore the World, One Journey at a Time</h1>
            <p className="lead mb-5">Find incredible deals on flights, hotels, and tours to your dream destinations.</p>

            <div className="search-bar-container mx-auto">
                <div className="row g-3 align-items-end">
                    <div className="col-12 col-md-3">
                        <label htmlFor="fromInput" className="form-label text-muted text-start d-block mb-1">FROM</label>
                        <input type="text" className="form-control form-control-lg border-0" id="fromInput" placeholder="Departure City" />
                    </div>
                    <div className="col-12 col-md-3">
                        <label htmlFor="toInput" className="form-label text-muted text-start d-block mb-1">TO</label>
                        <input type="text" className="form-control form-control-lg border-0" id="toInput" placeholder="Destination City" />
                    </div>
                    <div className="col-12 col-md-3">
                        <label htmlFor="dateInput" className="form-label text-muted text-start d-block mb-1">DATE</label>
                        <input type="date" className="form-control form-control-lg border-0" id="dateInput" />
                    </div>
                    <div className="col-12 col-md-3">
                        <button className="btn btn-primary btn-lg w-100 rounded-pill">Search Now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// Ad Carousel Component
const AdCarousel = () => (
    <section className="container py-5">
        <div id="adCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {/* Ad Item 1: App Download */}
                <div className="carousel-item active">
                    <div className="ad-carousel-item ad-app-download row align-items-center g-3">
                        <div className="col-12 col-md-4 text-center">
                            <img src="https://placehold.co/150x250/FFFFFF/007BFF?text=App+Mockup" alt="App Mockup" className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-8 text-center text-md-start">
                            <h3 className="fw-bold mb-3">Download the Wanderlust App!</h3>
                            <p className="lead mb-4">Get exclusive deals and manage your bookings on the go.</p>
                            <div className="d-flex justify-content-center justify-content-md-start gap-3 flex-wrap">
                                <a href="#" className="btn btn-light rounded-pill px-4 py-2">
                                    <img src="https://placehold.co/20x20/000000/FFFFFF?text=G" alt="Google Play" className="d-inline-block me-2" style={{ height: '1.2rem' }} />
                                    Google Play
                                </a>
                                <a href="#" className="btn btn-light rounded-pill px-4 py-2">
                                    <img src="https://placehold.co/20x20/000000/FFFFFF?text=A" alt="App Store" className="d-inline-block me-2" style={{ height: '1.2rem' }} />
                                    App Store
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Ad Item 2: 0% EMI Offer */}
                <div className="carousel-item">
                    <div className="ad-carousel-item ad-offer row align-items-center g-3">
                        <div className="col-12 col-md-4 text-center">
                            <img src="https://placehold.co/200x150/FFC107/FFFFFF?text=0%25+EMI" alt="0% EMI Offer" className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-8 text-center text-md-start">
                            <h3 className="fw-bold mb-3 text-dark">0% EMI Up to 6 Months!</h3>
                            <p className="lead mb-4 text-dark">Fly now, pay later. Available on Flights, Hotels & Tours.</p>
                            <button className="btn btn-dark rounded-pill px-4 py-2">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev ad-carousel-controls" type="button" data-bs-target="#adCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next ad-carousel-controls" type="button" data-bs-target="#adCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </section>
);

// How It Works Section Component
const HowItWorks = () => (
    <section className="container py-5">
        <h2 className="text-center section-title">How It Works</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="how-it-works-card">
                    <div className="card-icon">📱</div>
                    <h5 className="card-title">How to Book a Flight?</h5>
                    <p className="card-text text-muted">A simple guide to finding and booking your next flight.</p>
                    <a href="#" className="btn btn-outline-primary btn-sm rounded-pill">Learn More</a>
                </div>
            </div>
            <div className="col">
                <div className="how-it-works-card">
                    <div className="card-icon">🏨</div>
                    <h5 className="card-title">How to Book a Hotel?</h5>
                    <p className="card-text text-muted">Steps to secure the perfect accommodation for your trip.</p>
                    <a href="#" className="btn btn-outline-primary btn-sm rounded-pill">Learn More</a>
                </div>
            </div>
            <div className="col">
                <div className="how-it-works-card">
                    <div className="card-icon">💰</div>
                    <h5 className="card-title">How to Get Discounts?</h5>
                    <p className="card-text text-muted">Tips and tricks to save big on your travel bookings.</p>
                    <a href="#" className="btn btn-outline-primary btn-sm rounded-pill">Learn More</a>
                </div>
            </div>
        </div>
    </section>
);

// Inspiring Journeys Banner Component
const InspiringJourneysBanner = () => (
    <section className="container py-5">
        <div className="inspiring-journeys-banner">
            <div className="content">
                <h2 className="display-5">GO LIMITLESS</h2>
                <p className="lead mb-4">Embark on extraordinary adventures and create timeless memories.</p>
                <button className="btn">Watch the Film ❯</button>
            </div>
        </div>
    </section>
);

// Most Popular Packages Section Component
const PopularPackages = () => (
    <section className="container py-5">
        <h2 className="text-center section-title">Most Popular Packages</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {/* Package 1 */}
            <div className="col">
                <div className="popular-packages-card">
                    <img src="https://placehold.co/600x400/FFDDC1/333333?text=Paris+Bordeaux" alt="Paris and Bordeaux" />
                    <div className="card-body">
                        <h5 className="card-title">Paris and Bordeaux</h5>
                        <p className="card-text text-muted mb-2">11 NOV 2023 - 22 NOV 2023</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="package-price">$5,600</span>
                            <button className="btn btn-sm btn-outline-primary rounded-pill">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Package 2 */}
            <div className="col">
                <div className="popular-packages-card">
                    <img src="https://placehold.co/600x400/D4EDDA/333333?text=Seattle+Las+Vegas" alt="Seattle, Las Vegas" />
                    <div className="card-body">
                        <h5 className="card-title">Seattle, Las Vegas</h5>
                        <p className="card-text text-muted mb-2">08 AUG 2023 - 16 AUG 2023</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="package-price">$7,000</span>
                            <button className="btn btn-sm btn-outline-primary rounded-pill">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Package 3 */}
            <div className="col">
                <div className="popular-packages-card">
                    <span className="badge bg-danger badge-top-right">Last Minute 30% Off</span>
                    <img src="https://placehold.co/600x400/C1E1FF/333333?text=Rome+Milan+Madrid" alt="Rome, Milan, Madrid" />
                    <div className="card-body">
                        <h5 className="card-title">Rome, Milan, Madrid</h5>
                        <p className="card-text text-muted mb-2">04 JUL 2023 - 19 JUL 2023</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="package-price">$6,020</span>
                            <button className="btn btn-sm btn-outline-primary rounded-pill">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Package 4 */}
            <div className="col">
                <div className="popular-packages-card">
                    <img src="https://placehold.co/600x400/FFC1C1/333333?text=Florida+Family" alt="Florida Family" />
                    <div className="card-body">
                        <h5 className="card-title">Florida Family</h5>
                        <p className="card-text text-muted mb-2">Dates Flexible</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="package-price">$5,600</span>
                            <button className="btn btn-sm btn-outline-primary rounded-pill">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Package 5 */}
            <div className="col">
                <div className="popular-packages-card">
                    <span className="badge bg-danger badge-top-right">Last Minute 25% Off</span>
                    <img src="https://placehold.co/600x400/C1FFC1/333333?text=Rome+City+Tour" alt="Rome City Tour" />
                    <div className="card-body">
                        <h5 className="card-title">Rome City Tour</h5>
                        <p className="card-text text-muted mb-2">Dates Flexible</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="package-price">$6,750</span>
                            <button className="btn btn-sm btn-outline-primary rounded-pill">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Package 6 */}
            <div className="col">
                <div className="popular-packages-card">
                    <img src="https://placehold.co/600x400/C1C1FF/333333?text=Hawaii+Life" alt="Hawaii Life Style" />
                    <div className="card-body">
                        <h5 className="card-title">Hawaii Life Style</h5>
                        <p className="card-text text-muted mb-2">Dates Flexible</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="package-price">$8,000</span>
                            <button className="btn btn-sm btn-outline-primary rounded-pill">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// Popular Destinations Section Component
const PopularDestinations = () => (
    <section className="container py-5">
        <h2 className="text-center section-title">Popular Destinations</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div className="col">
                <div className="card">
                    <div id="carouselDestination1" className="carousel slide destination-carousel" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselDestination1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselDestination1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselDestination1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://placehold.co/600x400/FFDDC1/333333?text=Cox's+Bazar+1" className="d-block w-100" alt="Cox's Bazar Image 1" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://placehold.co/600x400/FFC0CB/333333?text=Cox's+Bazar+2" className="d-block w-100" alt="Cox's Bazar Image 2" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://placehold.co/600x400/ADD8E6/333333?text=Cox's+Bazar+3" className="d-block w-100" alt="Cox's Bazar Image 3" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselDestination1" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselDestination1" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Cox's Bazar, Bangladesh</h5>
                        <p className="card-text text-muted">Experience the world's longest natural sandy beach.</p>
                        <a href="#" className="btn btn-sm btn-outline-primary rounded-pill">View Packages</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div id="carouselDestination2" className="carousel slide destination-carousel" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselDestination2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselDestination2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselDestination2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://placehold.co/600x400/D4EDDA/333333?text=Bandarban+Hills+1" className="d-block w-100" alt="Bandarban Hills Image 1" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://placehold.co/600x400/90EE90/333333?text=Bandarban+Hills+2" className="d-block w-100" alt="Bandarban Hills Image 2" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://placehold.co/600x400/66CDAA/333333?text=Bandarban+Hills+3" className="d-block w-100" alt="Bandarban Hills Image 3" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselDestination2" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselDestination2" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Bandarban, Bangladesh</h5>
                        <p className="card-text text-muted">Explore the serene hills and vibrant indigenous cultures.</p>
                        <a href="#" className="btn btn-sm btn-outline-primary rounded-pill">View Packages</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div id="carouselDestination3" className="carousel slide destination-carousel" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselDestination3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselDestination3" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselDestination3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://placehold.co/600x400/C1E1FF/333333?text=Saint+Martin+1" className="d-block w-100" alt="Saint Martin Island Image 1" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://placehold.co/600x400/87CEEB/333333?text=Saint+Martin+2" className="d-block w-100" alt="Saint Martin Island Image 2" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://placehold.co/600x400/6495ED/333333?text=Saint+Martin+3" className="d-block w-100" alt="Saint Martin Island Image 3" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselDestination3" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselDestination3" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Saint Martin's Island, Bangladesh</h5>
                        <p className="card-text text-muted">A coral island paradise with crystal clear waters.</p>
                        <a href="#" className="btn btn-sm btn-outline-primary rounded-pill">View Packages</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// Testimonial Section Component
const TestimonialSection = () => (
    <section className="container py-5 testimonial-section">
        <h2 className="text-center section-title">What Our Clients Say</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col-md-7">
                <div className="row g-4">
                    <div className="col-12">
                        <div className="testimonial-card">
                            <div className="quote-icon">❝</div>
                            <p className="mb-auto">"Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum Cras."</p>
                            <div className="client-info">
                                <h6 className="client-name mb-0">David Beckham</h6>
                                <p className="client-title">Footballer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="testimonial-card">
                            <div className="quote-icon">❝</div>
                            <p className="mb-auto">"Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum Cras."</p>
                            <div className="client-info">
                                <h6 className="client-name mb-0">Jane Doe</h6>
                                <p className="client-title">Travel Enthusiast</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <div className="satisfaction-card h-100">
                    <div className="satisfaction-icon">❤️</div>
                    <h3 className="satisfaction-text">We are happy to make you happier</h3>
                    <p className="text-muted mt-3">"Etiem porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Fusce dapibus, Aenean e u leo quam. Pellentesque ornare se lacinia."</p>
                    <ul className="list-unstyled text-start text-muted">
                        <li>✔️ Nullam quis risus eget urna mollis ornare vel eu leo.</li>
                        <li>✔️ Sed posuere consectetur est et lobortis.</li>
                        <li>✔️ Aenean eu leo quam. Pellentesque ornare si.</li>
                        <li>✔️ Curabitur blandit tempus porttitor.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

// Special Offers Section Component
const SpecialOffers = () => (
    <section className="bg-light py-5">
        <div className="container">
            <h2 className="text-center section-title">Exclusive Offers</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div className="col">
                    <div className="card">
                        <img src="https://placehold.co/600x400/FFC1C1/333333?text=Winter+Escape" className="card-img-top" alt="Winter Escape" />
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Winter Wonderland Escape</h5>
                            <p className="card-text text-muted">Get 20% off on selected winter tours. Limited time!</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="text-danger fw-bold">$599 <s className="text-muted">$750</s></span>
                                <a href="#" className="btn btn-sm btn-primary rounded-pill">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://placehold.co/600x400/C1FFC1/333333?text=Family+Adventure" className="card-img-top" alt="Family Adventure" />
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Family Adventure Package</h5>
                            <p className="card-text text-muted">Special rates for families of 4 or more. Fun for everyone!</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="text-success fw-bold">Starting from $999</span>
                                <a href="#" className="btn btn-sm btn-primary rounded-pill">View Deal</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://placehold.co/600x400/C1C1FF/333333?text=Solo+Travel" className="card-img-top" alt="Solo Travel" />
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Solo Explorer's Dream</h5>
                            <p className="card-text text-muted">No single supplement on select solo travel adventures.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="text-success fw-bold">Explore Options</span>
                                <a href="#" className="btn btn-sm btn-primary rounded-pill">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// Customized Tour CTA Section Component
const CustomTourCTA = () => (
    <section className="container py-5">
        <div className="custom-tour-section text-center">
            <h2 className="fw-bold text-primary mb-3">Can't Find Your Perfect Trip?</h2>
            <p className="lead text-muted mb-4">Let us craft a personalized itinerary just for you. Tell us your dreams!</p>
            <button className="btn btn-primary btn-lg rounded-pill px-5">Request a Custom Tour</button>
        </div>
    </section>
);

// Footer Component
const Footer = () => (
    <footer className="custom-footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <div className="footer-brand mb-3">✈️ TourPackage</div>
                    <p className="footer-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere.</p>
                    <div className="trust-badge-container">
                        <img src="https://placehold.co/100x40/6C757D/FFFFFF?text=Travel+Weekly" alt="Travel Weekly" className="img-fluid" />
                        <img src="https://placehold.co/100x40/6C757D/FFFFFF?text=USTOA" alt="USTOA" className="img-fluid" />
                        <img src="https://placehold.co/100x40/6C757D/FFFFFF?text=GLOBE" alt="GLOBE" className="img-fluid" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <h5 className="footer-heading">LAST MINUTE DEALS</h5>
                    <ul className="list-unstyled">
                        <li className="deal-item">
                            <img src="https://placehold.co/60x60/FFDDC1/333333?text=Rome" alt="Rome, Milan, Madrid" />
                            <div>
                                <div className="deal-title">Rome, Milan, Madrid</div>
                                <span className="old-price">$6,600</span>
                                <span className="new-price">$6,020</span>
                            </div>
                        </li>
                        <li className="deal-item">
                            <img src="https://placehold.co/60x60/D4EDDA/333333?text=Rome" alt="Rome City Tour" />
                            <div>
                                <div className="deal-title">Rome City Tour</div>
                                <span className="old-price">$9,000</span>
                                <span className="new-price">$6,750</span>
                            </div>
                        </li>
                        <li className="deal-item">
                            <img src="https://placehold.co/60x60/C1E1FF/333333?text=SF" alt="San Francisco" />
                            <div>
                                <div className="deal-title">San Francisco</div>
                                <span className="old-price">$10,000</span>
                                <span className="new-price">$7,000</span>
                            </div>
                        </li>
                        <li className="deal-item">
                            <img src="https://placehold.co/60x60/FFC1C1/333333?text=Wild" alt="Wild Life Tour" />
                            <div>
                                <div className="deal-title">Wild Life Tour</div>
                                <span className="old-price">$4,000</span>
                                <span className="new-price">$3,200</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="row g-3">
                        <div className="col-12">
                            <div className="discount-banner">
                                <div className="discount-percentage">20% Off</div>
                                <div className="discount-text">Rome, Milan, Madrid</div>
                                <div className="discount-date">Take off on 4th July</div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="discount-banner red">
                                <div className="discount-percentage">30% Off</div>
                                <div className="discount-text">San Francisco</div>
                                <div className="discount-date">Take off on 5th Dec.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row copyright-bar text-center">
                <div className="col-12">
                    <p className="mb-0">Copyright © 2013 All Right Reserved, Package Tour GoodLayers Inc.</p>
                </div>
            </div>
        </div>
    </footer>
);

// Main App component for the homepage
const App = () => {
    // Function to handle sign-in button click
    const handleSignInClick = () => {
        // In a real React app, you would use React Router for navigation
        // For this standalone HTML/React example, we'll simulate a redirect
        window.location.href = 'login.html';
    };

    return (
        <> {/* Use React Fragment to wrap the entire component */}
            {/* Bootstrap CSS link (placed here for demonstration, typically in public/index.html head) */}
            {/* Corrected xintegrity to integrity and crossorigin to crossOrigin */}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" xintegrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
            {/* Google Fonts - Inter */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

            {/* Inline styles for React component */}
            <style>
                {`
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: #F8F9FA; /* Light gray background */
                    color: #343A40; /* Dark text for readability */
                    margin: 0; /* Ensure no default body margin */
                    padding: 0; /* Ensure no default body padding */
                    overflow-x: hidden; /* Prevent horizontal scrollbar from potential overflows */
                }
                .navbar-brand {
                    font-weight: 700;
                    color: #007BFF !important; /* Brand color */
                }
                .hero-section {
                    background-image: url('https://placehold.co/1920x800/A2D2FF/FFFFFF?text=Scenic+Landscape');
                    background-size: cover;
                    background-position: center;
                    position: relative;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 2rem;
                    color: white;
                }
                .hero-section::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.4);
                    z-index: 1;
                }
                .hero-content {
                    position: relative;
                    z-index: 2;
                    max-width: 900px;
                }
                .search-bar-container {
                    background-color: rgba(255, 255, 255, 0.95);
                    border-radius: 0.75rem;
                    padding: 1.5rem;
                    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
                }
                .card {
                    border: none;
                    border-radius: 0.75rem;
                    overflow: hidden;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
                }
                .card-img-top {
                    height: 200px;
                    object-fit: cover;
                }
                .btn-primary {
                    background-color: #007BFF;
                    border-color: #007BFF;
                }
                .btn-primary:hover {
                    background-color: #0056b3;
                    border-color: #0056b3;
                }
                .btn-outline-primary {
                    color: #007BFF;
                    border-color: #007BFF;
                }
                .btn-outline-primary:hover {
                    background-color: #007BFF;
                    color: white;
                }
                .section-title {
                    font-weight: 700;
                    color: #007BFF;
                    margin-bottom: 2.5rem;
                }
                .custom-tour-section {
                    background-color: #E9F5FF;
                    border-radius: 1rem;
                    padding: 3rem;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
                }
                .destination-carousel .carousel-inner {
                    border-radius: 0.75rem 0.75rem 0 0;
                }
                .destination-carousel .carousel-item img {
                    height: 200px;
                    object-fit: cover;
                    width: 100%;
                }
                .destination-carousel .carousel-control-prev,
                .destination-carousel .carousel-control-next {
                    width: 15%;
                    opacity: 0.7;
                    transition: opacity 0.2s ease;
                }
                .destination-carousel .carousel-control-prev:hover,
                .destination-carousel .carousel-control-next:hover {
                    opacity: 1;
                }
                .destination-carousel .carousel-control-prev-icon,
                .destination-carousel .carousel-control-next-icon {
                    background-color: rgba(0, 0, 0, 0.6);
                    border-radius: 50%;
                    padding: 0.75rem;
                    font-size: 1rem;
                }
                .destination-carousel .carousel-indicators {
                    bottom: 5px;
                    margin-bottom: 0;
                }
                .destination-carousel .carousel-indicators [data-bs-target] {
                    background-color: rgba(255, 255, 255, 0.5);
                    border: 1px solid rgba(0, 0, 0, 0.2);
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                }
                .destination-carousel .carousel-indicators .active {
                    background-color: white;
                }
                .ad-carousel-item {
                    background-color: #F0F8FF;
                    border-radius: 1rem;
                    overflow: hidden;
                    padding: 2rem;
                    min-height: 200px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
                }
                .ad-carousel-item.ad-app-download {
                    background: linear-gradient(to right, #007BFF, #66B2FF);
                    color: white;
                }
                .ad-carousel-item.ad-offer {
                    background-color: #FFF3CD;
                }
                .ad-carousel-item img {
                    max-height: 150px;
                    width: auto;
                    object-fit: contain;
                }
                .ad-carousel-controls .carousel-control-prev-icon,
                .ad-carousel-controls .carousel-control-next-icon {
                    background-color: rgba(0, 0, 0, 0.6);
                    border-radius: 50%;
                    padding: 1rem;
                }
                .how-it-works-card {
                    background-color: white;
                    border-radius: 0.75rem;
                    padding: 1.5rem;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
                    text-align: center;
                    transition: transform 0.2s ease;
                }
                .how-it-works-card:hover {
                    transform: translateY(-3px);
                }
                .how-it-works-card .card-icon {
                    font-size: 3rem;
                    color: #007BFF;
                    margin-bottom: 1rem;
                }
                .how-it-works-card .card-title {
                    font-weight: 600;
                    color: #007BFF;
                    margin-bottom: 0.75rem;
                }
                .how-it-works-card .btn {
                    margin-top: 1rem;
                }
                .inspiring-journeys-banner {
                    background-image: url('https://placehold.co/1920x400/334155/F8F9FA?text=Go+Limitless+Adventure');
                    background-size: cover;
                    background-position: center;
                    border-radius: 1rem;
                    padding: 4rem 2rem;
                    color: white;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }
                .inspiring-journeys-banner::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    z-index: 1;
                }
                .inspiring-journeys-banner .content {
                    position: relative;
                    z-index: 2;
                }
                .inspiring-journeys-banner h2 {
                    font-weight: 700;
                    font-size: 3rem;
                    margin-bottom: 1rem;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
                }
                .inspiring-journeys-banner .btn {
                    background-color: #FFC107;
                    border-color: #FFC107;
                    color: #343A40;
                    font-weight: 600;
                    padding: 0.75rem 2.5rem;
                    border-radius: 2rem;
                    transition: background-color 0.3s ease, transform 0.2s ease;
                }
                .inspiring-journeys-banner .btn:hover {
                    background-color: #e0a800;
                    transform: translateY(-2px);
                }
                .popular-packages-card {
                    background-color: white;
                    border-radius: 0.75rem;
                    overflow: hidden;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    position: relative;
                }
                .popular-packages-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
                }
                .popular-packages-card img {
                    height: 180px;
                    object-fit: cover;
                    width: 100%;
                }
                .popular-packages-card .card-body {
                    padding: 1rem;
                }
                .popular-packages-card .card-title {
                    font-weight: 600;
                    color: #007BFF;
                    font-size: 1.1rem;
                    margin-bottom: 0.5rem;
                }
                .popular-packages-card .package-price {
                    font-weight: 700;
                    color: #28A745;
                    font-size: 1.2rem;
                }
                .popular-packages-card .badge-top-right {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    font-size: 0.75rem;
                    padding: 0.4em 0.8em;
                    border-radius: 0.5rem;
                    z-index: 10;
                }
                .testimonial-section {
                    background-color: #F0F8FF;
                    padding: 3rem 0;
                    border-radius: 1rem;
                }
                .testimonial-card {
                    background-color: white;
                    border-radius: 0.75rem;
                    padding: 2rem;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
                    text-align: center;
                    min-height: 220px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .testimonial-card .quote-icon {
                    font-size: 2.5rem;
                    color: #007BFF;
                    margin-bottom: 1rem;
                }
                .testimonial-card .client-name {
                    font-weight: 600;
                    color: #343A40;
                    margin-top: 1rem;
                }
                .testimonial-card .client-title {
                    font-size: 0.85rem;
                    color: #6C757D;
                }
                .satisfaction-card {
                    background-color: #DCF8C6;
                    border-radius: 0.75rem;
                    padding: 2rem;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
                    text-align: center;
                    min-height: 220px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .satisfaction-card .satisfaction-icon {
                    font-size: 3rem;
                    color: #28A745;
                    margin-bottom: 1rem;
                }
                .satisfaction-card .satisfaction-text {
                    font-weight: 600;
                    color: #28A745;
                    font-size: 1.25rem;
                }
                .featured-content-section .card {
                    box-shadow: none;
                    border: 1px solid #e0e0e0;
                }
                .featured-content-section .video-container {
                    position: relative;
                    width: 100%;
                    padding-top: 56.25%;
                    background-color: #000;
                    border-radius: 0.5rem;
                    overflow: hidden;
                    margin-bottom: 1rem;
                }
                .featured-content-section .video-container img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .featured-content-section .play-button {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 4rem;
                    color: white;
                    background-color: rgba(0, 0, 0, 0.6);
                    border-radius: 50%;
                    width: 80px;
                    height: 80px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }
                .featured-content-section .play-button:hover {
                    background-color: rgba(0, 0, 0, 0.8);
                }
                .featured-content-section .tips-list .list-group-item {
                    display: flex;
                    align-items: center;
                    padding: 0.75rem 0;
                    border: none;
                    border-bottom: 1px dashed #e9ecef;
                }
                .featured-content-section .tips-list .list-group-item:last-child {
                    border-bottom: none;
                }
                .featured-content-section .tips-list img {
                    width: 60px;
                    height: 60px;
                    object-fit: cover;
                    border-radius: 0.5rem;
                    margin-right: 1rem;
                }
                .featured-content-section .tips-list .tip-title {
                    font-weight: 600;
                    color: #007BFF;
                    margin-bottom: 0.2rem;
                }
                .featured-content-section .tips-list .tip-date {
                    font-size: 0.8rem;
                    color: #6C757D;
                }
                .featured-content-section .search-package-form .form-control,
                .featured-content-section .search-package-form .form-select {
                    border-radius: 0.5rem;
                }
                .featured-content-section .search-package-form .btn {
                    border-radius: 0.5rem;
                }
                .custom-footer {
                    background-color: #212529;
                    color: #ADB5BD;
                    padding-top: 3rem;
                    padding-bottom: 1.5rem;
                }
                .custom-footer .footer-brand {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #F8F9FA;
                    margin-bottom: 1rem;
                }
                .custom-footer .footer-text {
                    font-size: 0.9rem;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                }
                .custom-footer .trust-badge-container img {
                    height: 40px;
                    margin-right: 10px;
                    opacity: 0.8;
                }
                .custom-footer .footer-heading {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #F8F9FA;
                    margin-bottom: 1.5rem;
                }
                .custom-footer .deal-item {
                    display: flex;
                    align-items: center;
                    margin-bottom: 1rem;
                }
                .custom-footer .deal-item img {
                    width: 60px;
                    height: 60px;
                    object-fit: cover;
                    border-radius: 0.5rem;
                    margin-right: 0.75rem;
                }
                .custom-footer .deal-title {
                    font-size: 0.95rem;
                    font-weight: 500;
                    color: #F8F9FA;
                    margin-bottom: 0.2rem;
                }
                .custom-footer .old-price {
                    text-decoration: line-through;
                    color: #6C757D;
                    font-size: 0.85rem;
                    margin-right: 0.5rem;
                }
                .custom-footer .new-price {
                    color: #FFC107;
                    font-weight: 600;
                    font-size: 0.95rem;
                }
                .custom-footer .discount-banner {
                    background-color: #007BFF;
                    border-radius: 0.75rem;
                    padding: 1.5rem;
                    text-align: center;
                    color: white;
                    margin-bottom: 1rem;
                    position: relative;
                    overflow: hidden;
                    min-height: 120px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .custom-footer .discount-banner.red {
                    background-color: #DC3545;
                }
                .custom-footer .discount-percentage {
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                }
                .custom-footer .discount-text {
                    font-size: 1.1rem;
                    font-weight: 500;
                }
                .custom-footer .discount-date {
                    font-size: 0.85rem;
                    opacity: 0.8;
                }
                .custom-footer .copyright-bar {
                    border-top: 1px solid #343A40;
                    padding-top: 1rem;
                    margin-top: 2rem;
                    font-size: 0.8rem;
                    color: #6C757D;
                }
                `}
            </style>

            <Navbar handleSignInClick={handleSignInClick} />
            <HeroSection />
            <AdCarousel />
            <HowItWorks />
            <InspiringJourneysBanner />
            <PopularPackages />
            <PopularDestinations />
            <AdCarousel /> {/* Re-using AdCarousel as it appears twice */}
            <TestimonialSection />
            <SpecialOffers />
            <CustomTourCTA />
            <Footer />

            {/* Bootstrap JS (bundle includes Popper) */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" xintegrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
        </>
    );
};

// Get the root element from the HTML
// const rootElement = document.getElementById('root'); // This line is not needed in the Canvas environment

// Create a root and render the App component
// if (rootElement) { // This block is not needed in the Canvas environment
//     ReactDOM.createRoot(rootElement).render(
//         <React.StrictMode>
//             <App />
//         </React.StrictMode>
//     );
// } else {
//     console.error("Root element with ID 'root' not found in the document.");
// }

export default App;
