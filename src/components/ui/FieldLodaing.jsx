import { Skeleton } from "keep-react";

export default function FieldLoading() {
    return (
        <div className="max-w-sm py-5">
            <Skeleton>
                <Skeleton.Line height="h-5" />
            </Skeleton>
        </div>
    );
}

