package org.joonzis.persistence;

import static org.junit.Assert.fail;

import java.sql.Connection;
import java.sql.DriverManager;

import org.junit.Test;

import lombok.extern.log4j.Log4j;

@Log4j

public class JDBCTests {
<<<<<<< HEAD
	
	static {
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
		}catch (Exception e) {
			e.printStackTrace();
		}
		
	}

	@Test
	public void testConnection() {
		try(Connection conn = DriverManager.getConnection(
					"jdbc:oracle:thin:@localhost:1521:XE",
					"scott",
					"tiger"
				)) {
			log.info(conn);
		} catch (Exception e) {
			fail(e.getMessage());
		}
	}
	
=======
   
   static {
      try {
         Class.forName("oracle.jdbc.driver.OracleDriver");
      }catch (Exception e) {
         e.printStackTrace();
      }
      
   }

   @Test
   public void testConnection() {
      try(Connection conn = DriverManager.getConnection(
               "jdbc:oracle:thin:@192.168.0.158:1521:XE",
               "scott",
               "tiger"
            )) {
         log.info(conn);
      } catch (Exception e) {
         fail(e.getMessage());
      }
   }
   
>>>>>>> 690de9767527b7f2649666b96d625a6265b86f6d
}
