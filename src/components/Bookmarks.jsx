
const Bookmarks = ({bookmarks,blogOfTime}) => {
    let sumOfTime=0;
    for (const obj of blogOfTime) {
       sumOfTime+=parseFloat(obj.reading_time)
    }

    // console.log(sumOfTime);

    return (
        <div className="w-1/4 overflow-hidden ">
            <div className="bg-gray-100 mb-6 p-5 rounded-md mt-5">
                <p>Spent time on read :{sumOfTime}  min</p>
            </div>
           
           <div className=" bg-amber-300 mt-5 p-2 rounded-md">
                {
                    bookmarks.map((mark,i)=> <p key={i} className="bg-gray-100 mb-6 p-5 rounded-md">{mark.title}</p> )
                }
           </div>
           

        </div>
    );
};

export default Bookmarks;