import { Icons, Icon } from "../../Atoms/Atom1/icons";
import "./styled/style.css";

const Logo =()=>{

return(
    <div className="logo">
        <Icon width={54} height={54} color="#29A19C" icon={Icons.Clipboard}  />
        <p>
            Tasks <br />
            Book
        </p>
    </div>

);

};

export default Logo;
