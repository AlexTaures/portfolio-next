export const formatDate = (dateString: string, format: string = '') => {
    let result: string = dateString;
    const date = new Date(dateString);
    const year = date.getFullYear();
    const formattedMonth = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);

    switch (format) {
        case 'Mth-yyyy':
            result = `${formattedMonth}-${year}`;
            break;
    }

    return result;
  }