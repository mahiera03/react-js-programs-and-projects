import React from "react";

function EducationDetails() {
  return (
    <section id="educationDetails">
      <h2>Education Details</h2>

      <table>
        <thead>
          <tr>
            <th>Qualification</th>
            <th>School/College</th>
            <th>University/Board</th>
            <th>YOP</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="eduCol01">B.Tech</td>
            <td className="remCol">FTC College of Engg Sangola</td>
            <td className="remCol">DBATU Lonere</td>
            <td className="eduCol01">2023</td>
            <td className="eduCol01">81%</td>
          </tr>
          <tr>
            <td className="eduCol01">HSC</td>
            <td className="remCol">MAP Balajinagar, Mangalwedha</td>
            <td className="remCol">Pune</td>
            <td className="eduCol01">2019</td>
            <td className="eduCol01">71%</td>
          </tr>
          <tr>
            <td className="eduCol01">SSC</td>
            <td className="remCol">MAP Nigadi BK</td>
            <td className="remCol">Kolhapur</td>
            <td className="eduCol01">2017</td>
            <td className="eduCol01">83%</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
export default EducationDetails;
