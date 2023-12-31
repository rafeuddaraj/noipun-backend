import { useState } from "react";
import { Alert } from "keep-react";
import { XCircle } from "phosphor-react";

export default function Error({ message, description }) {
    const [showAlert, setShowAlert] = useState(false);
    const onDismiss = () => {
        setShowAlert(!showAlert);
    };
    return (
        <div className="space-y-5">
            <Alert
                onDismiss={onDismiss}
                dismiss={showAlert}
                rounded={true}
                withBorder={true}
                withBorderAccent={true}
                color="error">
                <Alert.Container>
                    <Alert.Icon>
                        <XCircle size={24} color="#E92215" />
                    </Alert.Icon>
                    <Alert.Body>
                        <Alert.Title>
                            {message}
                        </Alert.Title>
                        <Alert.Description>
                            {description}
                        </Alert.Description>
                    </Alert.Body>
                </Alert.Container>
            </Alert>
        </div>
    );
}
