"""Convert date to timestamp module"""

from datetime import datetime

def date_to_stamp() -> int:
    """Get actual time in microseconds"""

    year, month, day = [int(elem) for elem in str(datetime.now().date()).split("-")]
    hour: int = 0
    minute: int = 0
    second: int = 0

    # Create a datetime object for the specified date and time
    target_datetime: datetime = datetime(year, month, day, hour, minute, second)

    # Convert the datetime object to a Unix timestamp in milliseconds
    timestamp_ms: int = int(target_datetime.timestamp() * 1000)
    
    # return 1713416400 * 1000 # 7 emails, Apr 18, 2024
    # return 1715058000 * 1000 # 3 emails, May 7, 2024
    return timestamp_ms