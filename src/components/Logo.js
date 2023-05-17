import { useNavigate } from "react-router";

const Logo = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return ( 
        <div onClick={handleClick} className="logo-wrapper">
            <img width={150} src="/logo-no-background.png" alt="solodevhub logo" loading="lazy"/>
        </div>
     );
}
 
export default Logo;