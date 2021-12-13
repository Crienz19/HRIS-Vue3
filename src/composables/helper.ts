

export default function useHelpers() {

    const setRowStatusColor = (status : string) : string => {
        let color = '';
        switch (status) {
            case 'Pending':
                color = 'bg-warning';
                break

            case 'Acknowledged':
                color = 'bg-success';
                break

            case 'Approved':
                color = 'bg-success';
                break

            case 'Disapproved':
                color = 'bg-danger';
                break
        }

        return color;
    }

    return {
        setRowStatusColor
    };
}