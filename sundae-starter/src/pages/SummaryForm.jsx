import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SummaryForm() {
    const [tcChecked, setTcChecked] = useState(false);

    const checkboxLabel = (
        <span>
            I agree to <span style={{ color: "red" }}>terms and conditions</span>
        </span>
    )
    return (
        <Form>
            <Form.Group className="mb-3" controlId="terms-and-conditions">
                <Form.Check
                    type="checkbox"
                    label={checkboxLabel}
                    checked={tcChecked}
                    onChange={(e) => setTcChecked(e.target.checked)}
                />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!tcChecked}>
                Confirm order
            </Button>
        </Form>
    );
}
