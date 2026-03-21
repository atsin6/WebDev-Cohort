
import "./Table.css";

const Table = ({submissions}) => {
    console.log("from table = ",submissions);
    return (
        <div className="table-panel">
            <div className="table-heading">
                <p className="table-eyebrow">Live Queue</p>
                <h2>Submitted Requests</h2>
                <p>Track every adoption form response here.</p>
            </div>

            <div className="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Pet Type</th>
                            <th>Breed</th>
                        </tr>
                    </thead>

                    <tbody>
                        {submissions.length === 0 ? (
                            <tr>
                                <td className="empty-state" colSpan="5">No submissions yet.</td>
                            </tr>
                        ) : (
                            submissions.map((sub,index) => (
                                <tr key={index}>
                                    <td>{sub.adopterName}</td>
                                    <td>{sub.email}</td>
                                    <td>{sub.phone}</td>
                                    <td>{sub.petType}</td>
                                    <td>{sub.breed}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;
