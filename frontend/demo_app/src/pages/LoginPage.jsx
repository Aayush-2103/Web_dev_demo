import { useEffect, useState } from 'react';
import bgImage from '../assets/bg.png'; 
import cardImage from '../assets/img.jpg';

function LoginScreen() {
    const [isLoginView, setIsLoginView] = useState(true);

    useEffect(() => {
        document.title = "Login Page | TASA Code_Craft"; 
  }, []);

  return (
    <div className="h-screen w-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="h-full w-full bg-black/60 grid grid-cols-1 grid-rows-[8%_auto]">
            
            <div className="h-full bg-white/50">
            </div>
            <div className="w-full h-full flex items-start justify-center">
                <div className="h-[58%] w-[45%] mt-40 rounded-3xl infinite-glow transition-all duration-300">
            
                    <div id="LoginPart" className={`${isLoginView ? 'grid' : 'hidden'} h-full w-full rounded-3xl grid grid-cols-[35%_auto] grid-rows-1`}>
                        <div className="h-full w-full bg-cover col-start-1 col-end-2 row-start-1 rounded-l-3xl grid grid-cols-[1] grid-rows-[40%_60%] items-center justify-end" style={{ backgroundImage: `url(${cardImage})` }}>
                            
                            <div className="h-full w-fit z-10 col-start-1 col-end-2 row-start-1 row-end-2 flex items-end">
                                <button type="button" className="text-3xl font-bold font-['Domine'] px-5 py-4 pr-11 rounded-l-3xl bg-gray-50">LOGIN</button>
                            </div>
                            <div className="h-full w-fit z-10 col-start-1 col-end-2 row-start-2 row-end-3">
                                <button type="button" id="Login_signupButton" onClick={() => setIsLoginView(false)}
                                className="text-2xl font-bold font-['Domine'] text-white [text-shadow:3px_3px_2px_rgba(247,37,133,1)]
                                px-5 py-4 rounded-l-3xl">SIGN UP</button>
                            </div>
                            
                        </div>
                        
                        <div className="h-full w-full col-start-1 col-end-2 row-start-1 row-end-2 bg-black/10 backdrop-blur-[3px]"></div>
                        <div className="h-full w-full col-start-2 col-end-4 row-start-1 row-end-2 rounded-r-3xl bg-gray-50 px-16">
                            <div className="h-full w-full grid grid-cols-1 grid-rows-[auto_auto_1fr]">
                                <div className="h-fit w-full col-start-1 col-end-2 row-start-1 row-end-2 flex items-center justify-center">
                                    <div className="h-40 w-40 bg-yellow-500 flex items-center justify-center rounded-full shadow-[2px_5px_2px_rgba(0,0,0,1)] mt-6">
                                        <p className="font-extrabold text-3xl">LOGO</p>
                                    </div>
                                </div>
                                <div className="h-fit w-full col-start-1 col-end-2 row-start-2 row-end-3">
                                    <p className="text-[12px] text-center px-4 mt-8 font-['Domine']">Get access to the exclusive 300+ hours of courses, tutorials and practice sheets to prepare for your interviews!</p>
                                </div>

                                <div className="h-full w-full">
                                    <form action="" className="h-fit w-full mt-4 grid grid-cols-1 grid-rows-auto gap-4 justify-items-center">
    
                                        <div className="h-fit w-[75%] grid grid-cols-1 grid-rows-1 items-center">
                                            <input required type="text" placeholder="UserID or Email" autoFocus 
                                                className="w-full col-start-1 col-end-2 row-start-1 row-end-2 p-3 pl-12 border-2 border-black rounded-full 
                                                    inset-shadow-[-2px_-2px_5px_rgba(0,0,0,1)] 
                                                    focus:outline-none 
                                                    font-['Domine'] text-md text-[#132da1] placeholder:text-[#132da1]/50"/>
                                            <i className="fa-solid fa-circle-user text-3xl col-start-1 col-end-2 row-start-1 row-end-2 text-[#132da1] ml-2 pointer-events-none"></i>
                                        </div>
                                        
                                        <div className="h-fit w-[75%] grid grid-cols-1 grid-rows-1 items-center">
                                            <input required type="password" placeholder="Password" 
                                                className="w-full col-start-1 col-end-2 row-start-1 row-end-2 p-3 border-2 border-black rounded-full pl-12 inset-shadow-[-2px_-2px_5px_rgba(0,0,0,1)] focus:outline-none placeholder:font-['Domine'] font-['Domine'] text-md text-[#132da1] placeholder:text-[#132da1]/50"/>
                                            <i className="fa-solid fa-lock col-start-1 col-end-2 row-start-1 row-end-2 text-3xl ml-2 pointer-events-none text-[#132da1]"></i>
                                        </div>

                                        <div className="w-[75%] grid grid-cols-[1fr_auto] grid-rows-1 items-end">
                                            <a href="#" className="w-fit col-start-1 col-end-2 row-start-1 row-end-2 text-blue-600">Forgot Password?</a>
                                            <button type="submit" className="
                                                w-fit h-fit 
                                                col-start-2 col-end-3 row-start-1 row-end-2 
                                                text-xl font-['Domine'] font-extrabold text-white 
                                                rounded-full py-2 px-6 
                                                hover:scale-110 transition-all ease-in-out duration-300
                                                animate-gradient">
                                                Login
                                            </button>
                                        </div>

                                        <div className="w-[75%] flex items-center justify-center mt-2">
                                            <div className="flex-1 h-0.5 bg-[#132da1]"></div>
                                            <span className="mx-4 text-[#132da1] font-['Domine'] font-bold">or sign in with</span>
                                            <div className="flex-1 h-0.5 bg-[#132da1]"></div>
                                        </div>

                                        <div className="w-[75%] flex items-center justify-center gap-6">
                                            <div className="w-12.5 h-12.5 flex items-center justify-center">
                                                <a href="#">
                                                    <i className="fa-brands fa-google text-[#132da1] text-5xl"></i>
                                                </a>
                                            </div>
                                            <div className="w-12.5 h-12.5 flex items-center justify-center">
                                                <a href="#">
                                                    <i className="fa-brands fa-square-linkedin text-[#132da1] text-5xl"></i>
                                                </a>
                                            </div>
                                            <div className="w-12.5 h-12.5 flex items-center justify-center">
                                                <a href="#">
                                                    <i className="fa-brands fa-github text-[#132da1] text-5xl"></i>
                                                </a>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                    <div id="SignupPart" className={`${!isLoginView ? 'grid' : 'hidden'} h-full w-full rounded-3xl grid grid-cols-[auto_35%] grid-rows-1`}>
                        <div className="rounded-l-3xl bg-white col-start-1 col-end-2 row-start-1 row-end-2 px-16">
                            <div className="w-full h-full grid grid-cols-1 grid-rows-[auto_1fr]">
                                <div className="w-full h-fit
                                col-start-1 col-end-2 row-start-1 row-end-2
                                bg-white flex justify-center my-8">
                                    <p className="font-['Domine'] font-bold text-transparent text-3xl
                                    bg-linear-to-tl from-[#4cc9f0] via-[#4361ee] via-40% to-[#f72585] bg-clip-text">Create an Account</p>
                                </div>
                                <div className="w-full h-fit
                                col-start-1 col-end-2 row-start-2 row-end-3
                                bg-white flex flex-col">
                                    <p className="self-end text-sm text-right italic font-['Domine'] font-bold">Don't Just Graduate. Get Hired.</p>
                                    <p className="self-end text-sm text-right font-['Domine'] mb-3">Access interview secrets, study materials, and real answers from industry professionals who have been in your shoes.</p>
                                    <form action="" className="h-fit w-[85%] grid grid-cols-1 grid-rows-auto gap-4 justify-center self-center">
                                        <div className="h-fit w-full
                                        col-start-1 col-end-2 row-start-1 row-end-2
                                        grid grid-cols-1 grid-rows-1 items-center">
                                            <input type="text" placeholder="UserName" required autoFocus
                                            className="col-start-1 col-end-2 row-start-1 row-end-2
                                            p-3 pl-10 border-2 border-black rounded-full 
                                            inset-shadow-[-2px_-2px_5px_rgba(0,0,0,1)] 
                                            focus:outline-none 
                                            font-['Domine'] text-md text-[#132da1] placeholder:text-[#132da1]/50"/>
                                            <i className="fa-solid fa-user col-start-1 col-end-1 row-start-1 row-end-2 text-2xl text-[#132da1] ml-2 pointer-events-none"></i>
                                        </div>

                                        <div className="h-fit w-full
                                        col-start-1 col-end-2 row-start-2 row-end-3
                                        grid grid-cols-1 grid-rows-1 items-center">
                                            <input type="email" placeholder="Email address" required
                                            className="col-start-1 col-end-2 row-start-1 row-end-2
                                            p-3 pl-10 border-2 border-black rounded-full 
                                            inset-shadow-[-2px_-2px_5px_rgba(0,0,0,1)] 
                                            focus:outline-none 
                                            font-['Domine'] text-md text-[#132da1] placeholder:text-[#132da1]/50"/>
                                            <i className="fa-solid fa-envelope-open col-start-1 col-end-2 row-start-1 row-end-2 text-2xl text-[#132da1] ml-2 pointer-events-none"></i>
                                        </div>

                                        <div className="h-fit w-full
                                        col-start-1 col-end-2 row-start-3 row-end-4
                                        grid grid-cols-1 grid-rows-1 items-center">
                                            <input type="password" name="" placeholder="Password" required
                                            className="col-start-1 col-end-2 row-start-1 row-end-2
                                            p-3 pl-10 border-2 border-black rounded-full 
                                            inset-shadow-[-2px_-2px_5px_rgba(0,0,0,1)] 
                                            focus:outline-none 
                                            font-['Domine'] text-md text-[#132da1] placeholder:text-[#132da1]/50"/>
                                            <i className="fa-solid fa-lock col-start-1 col-end-2 row-start-1 row-end-2 text-2xl text-[#132da1] ml-2 pointer-events-none"></i>
                                        </div>

                                        <div className="h-fit w-full
                                        col-start-1 col-end-2 row-start-4 row-end-5
                                        grid grid-cols-1 grid-rows-1 items-center">
                                            <input type="password" name="" placeholder="Confirm Password" required
                                            className="col-start-1 col-end-2 row-start-1 row-end-2
                                            p-3 pl-10 border-2 border-black rounded-full 
                                            inset-shadow-[-2px_-2px_5px_rgba(0,0,0,1)] 
                                            focus:outline-none 
                                            font-['Domine'] text-md text-[#132da1] placeholder:text-[#132da1]/50"/>
                                            <i className="fa-solid fa-lock col-start-1 col-end-2 row-start-1 row-end-2 text-2xl text-[#132da1] ml-2 pointer-events-none"></i>    
                                        </div>
                                        <div className="h-fit w-full
                                        col-start-1 col-end-2 row-start-5 row-end-6 flex justify-center">
                                            <button type="submit" 
                                            className="flex items-center justify-center space-x-1
                                            rounded-full bg-green-500/50 w-[75%] py-1 mt-3
                                            hover:scale-110 transition-all ease-in-out duration-300
                                            animate-gradient">
                                                <p className="text-2xl text-white font-['Domine'] font-bold">Get Started</p>
                                                <i className="fa-solid fa-arrow-right text-xl text-white"></i>
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>

                        <div className="rounded-r-3xl bg-cover col-start-2 col-end-3 row-start-1 row-end-2 grid grid-cols-[1] grid-rows-[40%_60%] items-center justify-start" style={{ backgroundImage: `url(${cardImage})` }}>
                            <div className="h-full w-fit z-10 col-start-2 col-end-3 row-start-1 row-end-2 flex items-end">
                                <button id="Signup_loginButton" type="button" onClick={() => setIsLoginView(true)} className="text-2xl text-white [text-shadow:3px_3px_2px_rgba(247,37,133,1)] font-bold font-['Domine'] px-5 py-4 pr-11 rounded-l-3xl">LOGIN</button>
                            </div>
                            <div className="h-full w-fit z-10 col-start-2 col-end-3 row-start-2 row-end-3">
                                <button type="button"
                                className="text-3xl font-bold font-['Domine'] px-5 py-4 rounded-r-3xl bg-white">SIGN UP</button>
                            </div>
                        </div>

                        <div className="h-full w-full col-start-2 col-end-3 row-start-1 row-end-2 bg-black/10 backdrop-blur-[3px]"></div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
}

export default LoginScreen;