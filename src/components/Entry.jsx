export default function Entry({img, title, country, googleMapsLink, dates, description}) {
    return(
        <div className="entry">
            <div className="entry-image-container">
                <img src={img?.src} className="entry-image" alt={img?.alt}/>
            </div>
            <div className="entry-details">                
                <div className="entry-location">
                    <img src="/src/assets/location-icon.png" alt="location icon" className="entry-location-icon"/>
                    <span className="entry-location-text">{country}</span>
                    <a href={googleMapsLink} className="entry-location-link"><span >View on Google Maps</span></a>
                </div>
                <h1 className="entry-title">{title}</h1>
                <div className="entry-date"><span>{dates}</span></div>
                <div className="entry-description"><p>{description}</p></div>
            </div>
       </div>
    )
}