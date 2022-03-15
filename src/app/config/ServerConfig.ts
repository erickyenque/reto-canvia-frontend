class ServerConfig {
    private static IP_SERVER: string = 'localhost'; //Servidor local
    private static PROTOCOL: string = 'http';
    private static PORT: number = 3000; 

    public static getServerRoute(nameService: String): string {
        return `${ServerConfig.PROTOCOL}://${ServerConfig.IP_SERVER}:${ServerConfig.PORT}/api/${nameService}`;
    }
}

export default ServerConfig;