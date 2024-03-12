import React from 'react'
import '../style/work.css'

const data = [
  { frontEnd: "1. Built a complete internal tool UI, which helps leads and managers to assign skills to the employees. Based on these skills we restrict their interaction with customers."
  , backEnd: "1. Migrated the downgrade data from Google Sheets to big query. This helped our finance team to perform analysis and provide the stakeholders with analyzed data regarding the customers who opted out of our products. " },
  { frontEnd: "2. Worked on optimizing customer's billing interface using react. This helped in reducing the waiting time of the customer by up to 20 percent when the customer tries to upgrade his card."
  , backEnd: "2. Being part of the billing team, worked and optimized the API calls when a customer upgraded their plans." },
  
  { frontEnd: ""
  , backEnd: "3. Further debug the issues happening in the live environment and maintain the code base which supplies information to fellow teams. " },

  ]
function Work() {
  return (
    <div className="custRev" id="workDiv">
      <div className="workingBlock"> 
            <h1 className='workHeaderOne'> Work Experience</h1>
            <table className="blockQuoteClasses">
                <tr>
                    <th>Front-end</th>
                    <th>Back-end</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr  key={key}>
                            <td className='testing'>{val.frontEnd}</td>
                            <td className='testing'>{val.backEnd}</td>
                        </tr>
                    )
                })}
                 </table>
            </div>
        </div>
 
  )
}
export default Work