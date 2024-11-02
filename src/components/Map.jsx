const Map = () => {
    return (
      <div style={{ width: '40%', height: '450px' }}>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.4088923994486!2d-46.83715232512012!3d-23.517791459992086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf01e61c8e92f7%3A0xa9a7727a8222ddce!2sAv.%20Francisco%20Pignatari%2C%20650%20-%20Vila%20Gustavo%20Correia%2C%20Carapicu%C3%ADba%20-%20SP%2C%2006310-390!5e0!3m2!1spt-BR!2sbr!4v1730414980502!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  };
  
export default Map;
