import React, { Component } from "react";
import Jumbotron from "../../common/jumbotron";
import { renderButtons } from "../../utils/renderButtons";
import {
    getReservations,
    emptyReservations, 
} from "../../services/reservationService";
import { getWaitList, emptyWaitList } from "../../services/waitListService";
import List from "../../common/lists";


class Table extends Component {
    state = {
        reservations: [],
        waitList: []
    };
async componentDidMount() {
// reservations
const {data: reservations} = await getReservations();
//waitList
const {data: waitList } = await getWaitList();
this.setState({ reservations, waitList });
}

handleDeleteWaitList = async () => {
    //reservations
    const originalReservations = this.state.reservations;
    const reservations = originalReservations;
    reservations.splice(0, reservations.length);
    //WaitList
    const originalWaitList = this.state.waitList;
    const waitlist = originalWaitList;
    waitlist.splice(0, waitlist.length);

    this.setState({ reservations, waitlist });
    try {
        await emptyReservations();
        await emptyWaitList();
    } catch (ex) {
        if (ex.response && ex.response.status === 404) {
            this.setState({
                reservations: originalReservations,
                waitlist: originalWaitList,
            });
        }
    }
};

    render() {
        const text = "Current Reservations and Waiting List";
        const { reservations, waitlist } = this.state;
        return (
            <>
            <Jumbotron
            text = {text}
            buttons = {renderButtons("tables")}
            renderClearBtn = {true}
            onDelete = {this.handleDeleteWaitl=List}
            /> 
            <List
            header="Table Reservations"
            name= "reservations"
            data = {reservations}
            isReservation = {true}
            />
            < br />
            <List 
            header = "Reservation WaitList"
            name = "waitlist"
            data = {waitlist}
            isWaitList= {true}
            />
            </>
        );
    }
}

export default Table;