import React, { useState,useEffect, useContext } from 'react';
import { FormattedMessage } from "react-intl";
import ReactTable from "../violation/table/ReactTable";
import {BookContext} from './BOOK'


const sizePerPage = 10;

export default function BookList() {

    const { tableData, setTableData } = useContext(BookContext);


    const freshFetch =async ()=>{

        const olddata = tableData
        console.log('olddata')
        console.log(olddata)
        console.log(typeof(olddata))

        const url = "http://192.168.195.213:8080/allow/all"
        const result =await fetch(url)
        const newd = await result.json()
        
        console.log('newdata')
        console.log(newd)
        console.log(typeof(newd))
         setTableData(newd)
        // if(newd!=olddata){
        //     console.log('true');
        //     //setTableData(newd)
        // }
    }

    // useEffect(()=>{
    //     freshFetch();
    // },[tableData])
            


    // useEffect(() => {
    //     const url = "http://192.168.195.213:8080/allow/all";
    
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(url);
    //             const json = await response.json();
    //             const data = json.filter(function (item) {
    //                 return item.visitorStartStr!== "";
    //             });


    //             /**倒序排列 */
    //             const tmp_arr = []
    //             for (let i = 0; i < data.length; i++) {
    //             tmp_arr[i] = data.pop()
    //             }

    //             setTableData(tmp_arr);

    //             //setTableData(data);
    //         } catch (error) {
    //             console.log("error", error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    /********************************************************************************* */

    // useEffect(() => {
    

    // const fetchData = async () => {

    //         const url = "http://192.168.195.213:8080/allow/all";
    //         fetch(url)
    //             .then(res => res.json())


    //             .catch(error => {
    //                 setIsLoading(false);
    //                 setIsError(true);
    //                 console.error('Error:', error)
    //             })
    //             .then(response => {
    //                  const newData = response
    //                 setTableData(oldData=>[...oldData , newData])
    //                 // setIsLoading(true);
    //                 // //只返回預約時間不空的資料
    //                 // const data = response.filter(function (item) {
    //                 // return item.visitorStartStr!== "";
    //                 // });

    //                 // /**倒序排列 */
    //                 // const tmp_arr = []
    //                 // for (let i = 0; i < data.length; i++) {
    //                 // tmp_arr[i] = data.pop()
    //                 // }

    //                 // console.log('oldData')
    //                 // console.log(tmp_arr)
    //                 // // setTableData(data=>[...tableData,tmp_arr])
    //                 // setTableData(tmp_arr)
                   
    //             });
               
    //     }

    //     fetchData();

    // }, []);


/********************************************************************************************** */


        
    

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const url = "http://192.168.195.213:8080/allow/all";
    //         fetch(url)
    //             .then(res => res.json())
    //             .catch(error => console.error('Error:', error))
    //             .then(response => {

    //                 setTableData(response)
                    
    //             });
               
    //         console.log('1st fetch data in fetchData()')
    //         console.log(tableData)
    //     }
    //     fetchData();
    // },[])









    const TableHeader = () => {
        return (
            <tr>

                <th>
                    <FormattedMessage id="visitor-name" />
                </th>
                <th>
                    <FormattedMessage id="visitor-unit" />
                </th>
                <th>
                    <FormattedMessage id="visitor-vehicleType" />
                </th>
                <th>
                    <FormattedMessage id="visitor-allowType" />
                </th>
                <th>
                    <FormattedMessage id="visitor-note" />
                </th>
                <th>
                    <FormattedMessage id="visitor-visitorStartStr" />
                </th>
                <th>
                    <FormattedMessage id="visitor-visitorEndStr" />
                </th>

                <th>
                    <FormattedMessage id="visitor-plateNumber" />
                </th>
            </tr>
        )
    }

    const tableBody = (value, index) => {

        return (
            <tr key={index}>
                <td>{value.name}</td>
                <td>{value.unit}</td>
                <td>{value.vehicleType}</td>
                <td>{value.allowType}</td>
                <td>{value.note}</td>
                <td>{value.visitorStartStr}</td>
                <td>{value.visitorEndStr}</td>
                <td>{value.plateNumber}</td>
            </tr>
        )
    }

    return (
        <div>

                    <ReactTable
                        tableData={tableData}
                        sizePerPage={sizePerPage}
                        tableHeader={TableHeader}
                        tableBody={tableBody}
                    />

        </div >
    );
}


