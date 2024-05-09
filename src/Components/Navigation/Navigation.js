import styles from './Navigation.module.css';
import Link from 'next/link';

// Array of navigation links with their corresponding href, text, and description
const LINKS = [
    { href: '/', text: 'Home', description: 'Go to home page'},
    { href: '/teams', text: 'My Teams', description: 'Manage my teams'},
    { href: '/trainings', text: 'My Trainings', description: 'Manage my training sessions'},
    { href: '/exercises', text: 'Exercises', description: 'Library of exercises'},
    { href: '/about', text: 'About Us', description: 'About PitchPro Planner and contact info'},
]

// Component: Navigation
// Description: Represents the navigation menu of the application, containing links to different pages.
export default function Navigation(){
    return (<div className={styles.grid}>

        {LINKS.map(l => <NavigationLink key={l.href} {...l}/>)}
        
        </div>);
}

// Component: NavigationLink
// Description: Represents a single navigation link in the navigation menu.
function NavigationLink({ href, text, description }){
    return (<Link
        href={href}
        className={styles.card}>
        <h2>
          {text} <span>-&gt;</span>
        </h2>
        <p>{description}</p>
      </Link>)
}