export enum PaymentMethod {
  Cash,
  CardPayment,
}

export enum Availability {
  Available,
  NotAvailable,
}

export enum Date {
  Sunday = 'Sunday',
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
}

export enum Treatment {
  Cleaning = 'Cleaning',
  Whitening = 'Whitening',
  Filling = 'Filling',
  Nerve_Filling = 'Nerve filling',
  Root_Canal_Therapy = 'Root canal therapy',
}

export enum CollectionTypes {
  Patient = 'patient',
  Physician = 'physician',
  TreatmentTypes = 'treatmentTypes',
  Appointments = 'appointments',
}

export enum AppointmentStatus {
  Pending = 'Pending',
  Confirmed = 'Confirmed',
  Cancelled = 'Cancelled',
  Completed = 'Completed',
}

export enum Gender {
  Male = 'Male',
  Feamel = 'Female',
}
