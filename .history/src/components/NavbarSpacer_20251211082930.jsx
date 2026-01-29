// components/NavbarSpacer.jsx

export default function NavbarSpacer() {
    return (
        // This DIV is hidden (aria-hidden) but reserves space equal to the Navbar's height.
        // h-36 is used for the stacked mobile height. 
        <div 
            className="h-36 sm:h-24 md:h-20" 
            aria-hidden="true" 
        />
    );
}