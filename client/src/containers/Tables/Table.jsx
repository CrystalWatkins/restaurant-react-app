import React, { Component } from "react";
import Jumbotron from "../../common/jumbotron";
import { renderButtons } from "../../utils/renderButtons";
import {
    getReservations,
    emptyReservations, 
} from "../../services/reservationService";
import { getWaitlist, emptyWaitlist } from "../../services/waitListService";
import List from "../../common/lists";


class Table extends Component {
    state = {
        reservations: [],
        waitlist: []
    };
async componentDidMount() {
// reservations
const {data: reservations} = await getReservations();
//waitlist
const {data: waitlist } = await getWaitlist();
this.setState({ reservations, waitList });
}

handleDeleteWaitlist = async () => {
    //reservations
    const originalReservations = this.state.reservations;
    const reservations = originalReservations;
    reservations.splice(0, reservations.length);
    //waitlist
    const originalWaitlist = this.state.waitlist;
    const waitlist = originalwaitlist;
    waitlist.splice(0, waitlist.length);

    this.setState({ reservations, waitlist });
    try {
        await emptyReservations();
        await emptyWaitlist();
    } catch (ex) {
        if (ex.response && ex.response.status === 404) {
            this.setState({
                reservations: originalReservations,
                waitlist: originalWaitlist,
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
            onDelete = {this.handleDeleteWaitlist}
            /> 
            <List
            header="Table Reservations"
            name= "reservations"
            data = {reservations}
            isReservation = {true}
            />
            < br />
            <List 
            header = "Reservation Waitlist"
            name = "waitlist"
            data = {waitlist}
            isWaitlist= {true}
            />
            </>
        );
    }
}

export default Table;