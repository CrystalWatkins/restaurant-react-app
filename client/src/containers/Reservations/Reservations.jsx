import React, { Component } from "react";
import Jumbotron from "./common/jumbotron";
import { renderButtons } from "./../utils/renderBtns";
import ReservationForm from "./ReservationForm";

class Reservations extends Component {
    render() {
        const text = "Make your reservation"
        return (
            <div>
                <Jumbotron text = {text} buttons = {renderButtons("reservations")} />
                <ReservationForm />
            </div>
        );
    }
}

export default Reservations;