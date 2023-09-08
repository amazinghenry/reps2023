import objectiveImage from '../images/conference-image.jpg'

const Objective = () => {
    return ( 
        <section className="objectives container-fluid">
            <div className="container">

                <h2 className='objective-title'>Overall objective of REPS 2023 </h2>
                <div className="objective-group">
                    <div className="objective-image">
                        <img src={ objectiveImage } alt="" className="img-fluid" />
                    </div>
                    <div className="objective-content">
                        <ul className="objective-ul">
                            <li className="objective-li">
                                To empower aspirational homeowners on options for owning or purchasing properties or investing in real estate as an asset class that can contribute to sustainable wealth creation
                            </li>
                            <li className="objective-li">
                                To review current industry macro-trends across the luxury, mid-market, residential  and commercial segments and understand the contribution of the real estate sector to broader economic development
                            </li>
                            <li className="objective-li">
                                To highlight emerging investment opportunities in the sector 
                            </li>
                            <li className="objective-li">
                                To encourage networking and business development engagements between developers, realtors, agents, financial advisers, and prospective investors
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Objective;