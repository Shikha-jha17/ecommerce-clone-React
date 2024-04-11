import React from 'react'


const DarkMode = () => {
    const [theme, setTheme]= React.useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const element= document.documentElement;
    console.log(element);

    React.useEffect(() => {
        localStorage.setItem("theme", theme);
        if(theme==="dark") {
            element.classList.add("dark");
            

        } else {
            element.classList.remove("light");
            element.classList.remove("dark");
        }
    })
  return (
    <div className='relative'>
       {/*<img 
            onClick={() => setTheme(theme==="dark"?"light":"dark")}
            src={LightButton} 
            alt=" " 
  className={`w-12 cursor-pointer ${theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-300`} />*/}
    
    
        {/*<switch
        onClick={() => setTheme(theme==="dark"?"light":"dark")}>
         Dark Mode
</switch>*/}

        <label className="inline-flex items-center me-5 cursor-pointer"  >
        <input type="checkbox" value="" class="sr-only peer"  onClick={() => setTheme(theme==="dark"?"light":"dark")}/>
        <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600 ">
            
        </div>
        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
        </label>
         
     </div>
  );
};

export default DarkMode