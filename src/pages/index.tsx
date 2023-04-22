import Header from "@/components/Header";

const Home = () => {

    return (
        <div className="">
            <Header />
            <div className="presentation-container">
                <div className="presentation">
                    <h1>Hey! I am <br/> Steve Basse</h1>
                    <p>I am an autodidact web developper using language like React to create amazing web applications.</p>
                    <button>Contact</button><button>Know More</button>
                    <p>🌐 Web Developper</p>
                </div>
                <div className="bubble-skills">

                </div>
            </div>
        </div>
    );
};

export default Home;
