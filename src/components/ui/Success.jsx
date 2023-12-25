import { useState } from "react";
import { Alert } from "keep-react";
import { CheckCircle } from "phosphor-react";

export const AlertComponent = ({message,description}) => {
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
                color="success">
                <Alert.Container>
                    <Alert.Icon>
                        <CheckCircle size={24} color="#0A9952" />
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
};
