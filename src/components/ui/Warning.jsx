import { Alert } from "keep-react";
import { Info } from 'phosphor-react'
import { useState } from "react";

export default function Warning({message,description}) {
    const [showAlert, setShowAlert] = useState(false)
    const onDismiss = () => {
      setShowAlert(!showAlert)
    }
    return (
        <div className="space-y-5">
            <Alert
                onDismiss={onDismiss}
                dismiss={showAlert}
                rounded={true}
                withBorder={true}
                withBorderAccent={true}
                color="warning">
                <Alert.Container>
                    <Alert.Icon>
                        <Info size={24} color="#D8A800" />
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
