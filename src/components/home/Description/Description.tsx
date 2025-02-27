"use client";
import Image from 'next/image';
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Description.module.sass';

const PLACEHOLDER_BLUE = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABrAGsDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAQIDBAAFBv/EAB0QAQEBAAMBAQEBAAAAAAAAAAACAQMREjEhE0H/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EABoRAQEBAQADAAAAAAAAAAAAAAABEQIDMUH/2gAMAwEAAhEDEQA/APmZz9xv4c+MvHH73rbxYcdXlrVxtMM/HjRC44elpPhJPhsnaSj6Sk1pErQta0LS1iFs9r2hZxSFFNRWsZ1omP1o45DJVjGTo6qkYvCUYtKo5ulMOTB7NmO6WtHdJWpqonSNq1qF6lpEbZ7XtCzikaKaitIl6mSecd0bGbWmlXE8PmqY0+aPZOx7NGDulrXbpN1NELWo3p61K9JcSvULVvUL0RSdFGtJ2sPbHC9u7SqqZps1PNHs0VTt3ZOw7CKbdJuu3SbpAK1KtGtSrSOEvUb090hdBRa0not2n7UrHv8AofSHsctJr+h9I5Q+jTVvQek/TvQQbaLtF2ibRB1UlVDVI3RGW6Z+S+jcl9Ml360ap1X3pewcND2P6Gy2DOZSeXsLsbcs2UyzauUbOr+neksoewR9olUG6StI4FUhyUe6ZeW/8TaqRPlvvUh36Biuc5wIfRpvrSOB7WzjvtonWPh+NMGir5o9kwwId0labSUS4jyay3vetPJ8ZaR9aT0TfoOctm5znAP/2Q==';

export const Description = () => {
    const [hasBorder, setBorder] = useState(false);
    const handleClick = () => {
      setBorder(!hasBorder);
    }

    const cx = classNames.bind(styles);

    const buttonStyles = cx('Description__button', {
      'Description__button--border': hasBorder,
    });

    return(
      <section className={styles.Description}>
        <button onClick={handleClick} className={buttonStyles}>
          <div className={styles.Description__imageContainer}>
            <Image 
              src="/images/description.jpeg" 
              alt="products marketplace"
              fill
              placeholder='blur'
              blurDataURL={PLACEHOLDER_BLUE}
              />
          </div>
        </button>
        
        <div className={styles.Description__text}>
          <h2>Bring the future today</h2>
          <p>E-Shop: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
        </div>


        <Image 
          src="/images/description.jpeg" 
          alt="products marketplace"
          width={500} 
          height={300}
          priority={false} // set to true if u want with loadLazy
          quality={80} //x defecto es 75 
          />
        <div className={styles.Description__text}>
          <h2>Bring the future today</h2>
          <p>E-Shop: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
        </div>
      </section>
    )
  }