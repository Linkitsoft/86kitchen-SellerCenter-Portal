

const DashboardTopCards = ({ data }) => {

    return (
        <div className="dashboardTopCards">
            {data?.map((item, index) => (
                <div className="dashboardTopCards_single" key={index}>
                    <div className="dashboardTopCards_pic">
                        <img src={item?.pic} alt="pic" />
                    </div>
                    <div>
                        <p className="dashboardTopCards_text">{item.number}</p>
                        <p className="dashboardTopCards_number">{item.text}</p>
                    </div>
                </div>
            ))
            }
        </div >
    );
};

export default DashboardTopCards;
