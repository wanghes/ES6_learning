import {hello,add} from "./lib";
import ModuleA from './compoments/test/ModuleA';
React.render(<div>asassa</div>,document.body);
document.write(hello()+'<br>'+add(1,2)+"<br>"+ModuleA);
