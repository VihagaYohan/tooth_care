export enum PaymentMethod {
  Cash,
  CardPayment,
}

export enum Availability {
  Available,
  NotAvailable,
}

export enum Date {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
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
  Pending = 'pending',
  Confirmed = 'confirmed',
  Cancelled = 'cancelled',
  Completed = 'completed',
}

export enum Gender {
  Male = 'Male',
  Feamel = 'Feamel',
}
