import Table from 'react-bootstrap/Table';

const Programme = () => {
    return (
        <section className='container-fluid programme'>
        <div className='container'>
            <h2 className='about-title'>
                Programme
            </h2>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Time</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>8:00am - 8:30am</td>
            <td>Registration and Participant Arrival</td>
          </tr>
          <tr>
            <td>8.30am – 9.30am</td>
            <td>Exhibition Opens + International Freedom Centre Tour:  Onsite tour of the new International Freedom Centre on the grounds of This Present House</td>
          </tr>
          <tr>
            <td>9.45am</td>
            <td>Welcome, Opening Remarks, Protocols, Announcements</td>
          </tr>
          <tr>
            <td>10.00am</td>
            <td>
                <div className='table-title'>
                    Keynote 1
                </div>
                <div className='table-content'>
                “The Nigerian Economic  Update and Outlook; Key Trends and Prospects” 
                </div>
            </td>
          </tr>
          <tr>
            <td>10.15am</td>
            <td>
            <div className='table-title'>
                Main Conference Keynote
                </div>
                <div className='table-content'>
                Re-Appraising the Drivers of Real Estate Funding Post COVID-19
            </div>
            </td>
          </tr>
          <tr>
            <td>10.35am</td>
            <td>
            <div className='table-title'>
                Plenary 1 – New Drivers of Growth in Real Estate and Property Development
            </div>
            <div className='table-content'>
                This Plenary will examine the key opportunities, challenges and dynamics in the real estate and property market, with a focus on supply side and development opportunities, examining pricing trends, new location hotspots, and emerging technology in the sector that is positioning it for growth. It will also look at entrepreneurial opportunities in the sector, and the different market segments e.g. luxury, mid-market, affordable, as well as commercial and residential trends, and the extent to which the current policy and regulatory environment in the industry is conducive to growth
            </div>
            </td>
          </tr>
          <tr>
            <td>11.20am</td>
            <td> Audience Q & A </td>
          </tr>
          <tr>
            <td>11:35am</td>
            <td>Presentation by Triumph-Abatan Oluwayomi MD, ATCO HOMES ATCO HOMES (Diamond Sponsor)</td>
          </tr>
          <tr>
            <td>11.45am</td>
            <td> MORNING BREAK & NETWORKING COFFEE & EXHIBITION TOUR </td>
          </tr>
          <tr>
            <td>11.55am</td>
            <td> 
            <div className='table-title'>
                Keynote 2
            </div>
            <div className='table-content'>
            Real Estate Market Fundamentals and Outlook
            </div>
            </td>
          </tr>
          <tr>
            <td>12:10pm</td>
            <td>
            <div className='table-title'>
            Plenary 2 :  The Path to Homeownership: Acquisition, Investment Dynamics and Options 
            </div>
            <div className='table-content'>
            This Plenary will examine available options, tips and strategies for purchasing and owning your first home or a portfolio of assets. It will provide a broad overview on how Nigeria’s mortgage finance sector works and is evolving, and examine new financing trends for home acquisition for owner-occupiers and for investors seeking it as a path to build sustainable wealth. Panelists will also touch on the risks and rewards involved in home acquisition and investment, and the current and emerging investment opportunities that exist both locally and overseas. Other modes of investing in real estate such as Real Estate Investment Trusts (REITS), Real estate funds, building a property portfolio, rent-to-own, time-share, special purpose vehicles etc. can  also be explored
            </div>
            </td>
          </tr>
          <tr>
            <td>12:55pm</td>
            <td> Audience Q & A </td>
          </tr>
          <tr>
            <td>1:10pm</td>
            <td>Presentation by Platinum Sponsor</td>
          </tr>
          <tr>
            <td>1.20pm</td>
            <td>Closing Remarks & Vote of Thanks</td>
          </tr>
          <tr>
            <td>1.35pm</td>
            <td>Exhibition! Exhibition! Exhibition!</td>
          </tr>
          <tr>
            <td>3.30pm</td>
            <td>Close</td>
          </tr>

        </tbody>
        </Table>
        </div>
        </section>
    );
}
 
export default Programme;