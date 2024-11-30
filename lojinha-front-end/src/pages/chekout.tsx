import React from "react";
import { Typography } from "@mui/material";

const Checkout: React.FC = () => {
    return (
        <div style={{ padding: "20px" }}>
            <Typography variant="h4">Finalizar Compra</Typography>
            <Typography variant="body1">
                Em breve você poderá finalizar sua compra!
            </Typography>
        </div>
    );
};

export default Checkout;
