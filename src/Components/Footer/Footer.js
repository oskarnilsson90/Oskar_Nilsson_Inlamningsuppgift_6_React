import Image from "next/image";
import styles from './Footer.module.css';
import Link from 'next/link';

// Component: Footer
// Description: Represents the footer section of the application, displaying the application name and a link to the creator's GitHub profile.
export default function Footer(){
    return (<div className={styles.description}>
        <p>
          PitchPro Planner ⚽
        </p>
        <div>
          <Link
            href="https://github.com/oskarnilsson90"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/github.png"
              alt="GitHub Logo"
              className={styles.vercelLogo}
              width={48}
              height={48}
              priority
            />
          </Link>
        </div>
      </div>);
}