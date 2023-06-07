import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Title from "../../componnet/title/Title";


const Peralex = () => {
    return (
           <div className="my-28">
            <Title title='about our bussness' subTitle='about us'></Title>
             <div className="bg-gradient-to-r h-screen w-full from-pink-400 via-purple-500 to-blue-500  md:flex items-center bg-opacity-20 shadow-xl shadow-white pb-8 rounded-xl">
                <div className="md:w-10%">
                    <Player
                        autoplay
                        speed={1.5}
                        loop
                        src="https://assets10.lottiefiles.com/packages/lf20_xmdlmtgz.json"
                        style={{ height: "full", width: "full" }}
                    >
                        <Controls

                            buttons={[
                                "play",
                                "repeat",
                                "frame",
                                "debug",
                                "snapshot",
                                "background"
                            ]}
                        />
                    </Player>
                </div>
                <div className="md:w-[90%] mr-6">
                    <h1 className="text-primary">About US</h1>
                    <p className="text-secondary">Welcome to our cricket academy! We are dedicated to nurturing young talent and providing comprehensive training in all aspects of cricket. Our experienced coaches and state-of-the-art facilities ensure that each player receives personalized attention and develops the skills necessary to excel in the game.</p>
                    <button className="btn-primary"> contact us</button>
                </div>
            </div>
           </div>
    );
};

export default Peralex;