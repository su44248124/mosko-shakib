import InstactorsCard from "./InstactorsCard";


const InstarctorMap = ({ items }) => {
    console.log(items)
    return (
        <div className="grid md:grid-cols-2 gap-8">
            {
                items.map(item =><InstactorsCard 
                key={item.key}
                item={item}
                ></InstactorsCard> )
            }
        </div>
    );
};

export default InstarctorMap;