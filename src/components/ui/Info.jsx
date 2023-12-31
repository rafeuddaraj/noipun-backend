import { Alert } from "keep-react";
import { Info as InfoComponent } from 'phosphor-react'
import { useState } from "react";
export default function Info({message,description}) {
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
                color="primary">
                <Alert.Container>
                    <Alert.Icon>
                        <InfoComponent size={24} color="#0F3CD9" />
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
