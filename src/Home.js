import { Component } from "react";



export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            GPSArray: [
                {
                    DeviceId: "D-1567",
                    DeviceType: "Aircraft",
                    Timestamp: "08-09-2022 12:27",
                    Location: "L1"
                },
                {
                    DeviceId: "D-1567",
                    DeviceType: "Aircraft",
                    Timestamp: "08-09-2022 12:30",
                    Location: "L1"
                },
                {
                    DeviceId: "D-1567",
                    DeviceType: "Aircraft",
                    Timestamp: "08-09-2022 12:31",
                    Location: "L1"
                },
                {
                    DeviceId: "D-1567",
                    DeviceType: "Aircraft",
                    Timestamp: "08-09-2022 12:32",
                    Location: "L1"
                },
                {
                    DeviceId: "D-1567",
                    DeviceType: "Aircraft",
                    Timestamp: "08-09-2022 12:34",
                    Location: "L1"
                },
                {
                    DeviceId: "D-1571",
                    DeviceType: "Aircraft",
                    Timestamp: "08-09-2022 12:36",
                    Location: "L6"
                }
            ],

        }




    }
    render() {

        const GPS = this.state.GPSArray.map((s, i) => {
            return (


                <tr>
                    <td>{s.DeviceId}</td>
                    <td>
                        {s.DeviceType}
                    </td>
                    <td>
                        {s.Timestamp}
                    </td>
                    <td>&nbsp;&nbsp;&nbsp;
                        {s.Location}
                    </td>
                </tr>


            );
        })

        return (
            <div>
                <table style={{
                    border: '1px solid black',
                    alignItems: 'center'
                }}>
                    <tr>
                        <td>
                            <th>Device Id</th>
                        </td>
                        <td>
                            <th>DeviceType</th>
                        </td>
                        <td>
                            <th> Timestamp</th>
                        </td>
                        <td>
                            <th>Location</th>
                        </td>


                    </tr>
                    {GPS}
                </table>

            </div>
        )
    }
}