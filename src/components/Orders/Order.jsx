export default function Order() {
    return (
        <>
            <tr>
                <td className="table-td">ময়নার আম্মা</td>
                <td className="table-td">10 Mar 2023 10:58:13 PM</td>
                <td className="table-td">হাতের কাজ ব্লাউজ।</td>
                <td className="table-td">৫০০ টাকা</td>
                <td className="table-td input-mark justify-center">
                    <input max="100" value="100" />
                    <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-400">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                        />
                    </svg>
                </td>
            </tr>
        </>
    );
}
