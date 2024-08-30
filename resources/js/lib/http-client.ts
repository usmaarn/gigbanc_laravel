/** @format */

import axios, {
    AxiosError,
    AxiosPromise,
    AxiosRequestConfig,
    AxiosResponse,
} from "axios";
import { config } from "./config";

type ApiError<T = {}> = { [key: string]: string } | null;
type HttpClientResponse<T extends ApiError | null = null> = {
    errors: T;
    data: T;
    success: boolean;
};

class HttpClient {
    private http = axios.create({
        baseURL: config.appUrl + "/api/v1",
    });

    public withToken() {
        return this;
    }

    public async get<T extends ApiError>(
        url: string,
        options: AxiosRequestConfig = {}
    ): Promise<HttpClientResponse<T>> {
        const response = await this.http.get(url, options).catch((err) => {
            if (err instanceof AxiosError) console.log(err?.response?.data);
            else console.log(err?.message);
        });
        return response?.data ?? null;
    }

    public post<T>(
        url: string,
        data: object = {},
        options: AxiosRequestConfig = {}
    ): Promise<HttpClientResponse> {
        return this.processResponse(this.http.post(url, data, options));
    }

    public put(
        url: string,
        data: object,
        options: AxiosRequestConfig = {}
    ): Promise<HttpClientResponse> {
        return this.processResponse(this.http.put(url, data, options));
    }

    public patch(
        url: string,
        data: object,
        options: AxiosRequestConfig = {}
    ): Promise<HttpClientResponse> {
        return this.http.patch(url, data, options);
    }

    public delete(
        url: string,
        options: AxiosRequestConfig = {}
    ): Promise<HttpClientResponse> {
        return this.http.delete(url, options);
    }

    private async processResponse<T = {}>(
        request: AxiosPromise
    ): Promise<HttpClientResponse> {
        let errorBag: ApiError = null;
        const res: void | AxiosResponse<any, any> = await request.catch(
            (err) => {
                console.log(err?.response);
                errorBag = { message: "an error occurred" };
                if (err instanceof AxiosError) {
                    if (err?.response?.status == 422)
                        errorBag = err?.response?.data?.errors;
                    else
                        errorBag = err?.response?.data?.message ?? {
                            message: "an error occurred",
                        };
                }
            }
        );
        if (errorBag != null)
            return { data: null, success: false, errors: errorBag };
        return { success: true, errors: errorBag, data: res?.data };
    }
}

export const http = new HttpClient();
