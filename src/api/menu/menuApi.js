import axios from "axios";

import { axiosInstance } from "../axiosInstance";

export const createMenuApi = axiosInstance.post('/menu');