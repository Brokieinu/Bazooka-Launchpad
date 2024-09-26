import React from 'react';
import Image from 'next/image';
import styles from '@/styles/cards.module.css';

function Cards() {
  const ethosItems = [
    {
      title: "Trust",
      description: "Honesty is the best policy. We're committed to openness and transparency. We make sure everyone involved, from investors to project developers, has access to all the information they need to make major decisions. Trust is earned not given.",
      image: "/trust.png", 
    },
    {
      title: "Innovative Disruption",
      description: "We’re all about shaking things up and pushing boundaries. Our launchpad is designed to challenge traditional ways of doing things and bring fresh, innovative ideas to Web3. We are excited about technologies and creative approaches to help new and exciting Web3 projects with visionary technopreneurs get off the ground.",
      image: "/innovate.png", 
    },
    {
      title: "No Rug Pulls, No Scam",
      description: "Keeping our community of investors safe and secure is our top priority. We are aware of the high risks and high returns in Web3 projects, being degen brokies is part of our DNA. That said, we’re committed to protecting our users from scams and rug pulls. We thoroughly vet every project before it gets launched on our platform. Our strict no-tolerance policy for scams means you can invest with confidence, knowing we’ve got your back.",
      image: "/noscam.png", 
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={`${styles.title} ${styles.titleCenter}`}>Our Ethos</h2>
      <div className={`${styles.gridContainer} ${styles.gridContainerMd}`}>
        {ethosItems.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageContainer}>
              <Image src={item.image} alt={item.title} width={85} height={90} />
            </div>
            <h3 className={styles.titleText}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
