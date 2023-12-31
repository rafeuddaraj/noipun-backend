import { useEffect, useState } from "react";
import { Alert } from "keep-react";
import { CheckCircle } from "phosphor-react";
import { useDispatch } from "react-redux";
import { register } from "../../features/accountSlice/accountSlice";

export default function Success({ message, description, recentlyRegister }) {
    const [showAlert, setShowAlert] = useState(false);
    const dispatch = useDispatch();
    const onDismiss = () => {
        setShowAlert(!showAlert);
        if (recentlyRegister) {
            dispatch(register(false));
        }
    };

    return (
        <div className="space-y-5">
            <Alert
                className="fixed top-48 left-1/3 bg-green-400 text-white"
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
                        <Alert.Title>{message}</Alert.Title>
                        <Alert.Description>{description}</Alert.Description>
                    </Alert.Body>
                </Alert.Container>
            </Alert>
        </div>
    );
}
