import { useNavigate } from "react-router";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Logo = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return ( 
        <div onClick={handleClick} className="logo-wrapper">
            {/* <img width={150} height={26} src="/logo-no-background.png" alt="solodevhub logo" loading="lazy"/> */}
            <LazyLoadImage width={150} height={26} src="/logo-no-background.png" alt="solodevhub logo" />
        </div>
     );
}
 
export default Logo;